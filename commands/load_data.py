import pandas as pd
from sqlalchemy import create_engine

# Read JSON file
df = pd.read_json("/Users/anmolchauhan/Documents/core/commands/jsondata.json")

engine = create_engine('mysql+pymysql://root:anmol1234@localhost:3306/energy_insights')

df.to_sql('dashboard_insight', con=engine, if_exists="replace", index=False)
print('succesfully inserted')