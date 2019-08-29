import yaml

config = dict(
    database_con:
        <<: *default
        adapter: postgresql
        database: <%= ENV['DB_NAME'] %>
        username: <%= ENV['USERNAME'] %>
        password: <%= ENV['PASSWORD'] %>
        host: <%= ENV['HOSTNAME'] %>
        port: <%= ENV['PORT'] %>
)

with open('./prodsafe_file.yml', 'w') as outfile:
    yaml.dump(config, yaml_file, default_flow_style=False)
