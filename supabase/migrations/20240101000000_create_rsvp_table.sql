-- Create the table
create table public.rsvp_responses (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  nombre_completo text not null,
  email text null,
  asistira text not null check (asistira in ('si', 'no', 'no_se')),
  ceremonia boolean not null default false,
  vegetariano boolean not null default false,
  sin_gluten boolean not null default false,
  vegano boolean not null default false,
  sin_lactosa boolean not null default false,
  otras_alergias text null,
  comentarios text null,
  constraint rsvp_responses_pkey primary key (id)
);

-- Enable RLS
alter table public.rsvp_responses enable row level security;

-- Create policies
create policy "Enable insert for everyone"
on public.rsvp_responses
for insert
to anon
with check (true);

create policy "Enable select for authenticated users only"
on public.rsvp_responses
for select
to authenticated
using (true);
