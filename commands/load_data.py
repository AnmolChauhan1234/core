import pandas as pd
from sqlalchemy import create_engine

# Read JSON file
df = pd.read_json("C:/Users/alokb/Downloads/jsondata.json")

engine = create_engine('mysql+mysqldb://root:root@localhost/energy_insights')

df.to_sql('dashboard_insight', con=engine, if_exists="replace", index=False)
print('succesfully inserted')