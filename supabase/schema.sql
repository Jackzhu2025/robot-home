-- Run this in Supabase SQL Editor

create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  email text unique,
  name text,
  company text,
  phone text,
  role text default 'user',
  plan text default 'free',
  credits int default 10,
  created_at timestamp default now()
);

create table if not exists public.favorites (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid,
  target_type text,
  target_id text,
  created_at timestamp default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text,
  status text,
  current_period_end timestamp,
  created_at timestamp default now()
);

create table if not exists public.content_items (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content_type text not null,
  status text default 'draft',
  payload jsonb,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Promote first admin manually:
-- update public.profiles set role = 'admin', plan = 'pro' where email = 'your@email.com';
