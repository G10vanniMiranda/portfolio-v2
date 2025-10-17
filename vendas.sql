create table vendas (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  quantidade integer not null,
  preco_custo numeric not null,
  percentual numeric not null,
  preco_venda numeric, -- será calculado automaticamente
  created_at timestamp with time zone default now()
);


create or replace function calcular_preco_venda()
returns trigger as $$
begin
  new.preco_venda := new.preco_custo * new.percentual;
  return new;
end;
$$ language plpgsql;

create trigger trigger_calcula_preco_venda
before insert or update on vendas
for each row
execute function calcular_preco_venda();

