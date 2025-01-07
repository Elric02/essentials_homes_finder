# Eventually this file was simply used to generate the CSV file containing all the yaml data

import os
import yaml
import pandas as pd

def find_home_by_account_name(folder_path):
    results = []
    file_list = [f for f in os.listdir(folder_path) if f.endswith('.yml')]
    total_files = len(file_list)

    for index, file_name in enumerate(file_list, start=1):
        if index%100 == 0:
            print(f"Processing file {index}/{total_files}: {file_name}")
        file_path = os.path.join(folder_path, file_name)
        try:
            with open(file_path, 'r') as file:
                data = yaml.safe_load(file)

                results.append((file_name, data.get('last-account-name', None), data.get('homes', None)))

        except Exception as e:
            print(f"Error processing file {file_name}: {e}")
    return results

if __name__ == "__main__":
    folder = input("Enter the folder path: ")

    results = find_home_by_account_name(folder)
    
    df = pd.DataFrame(results)
    print(df)
    df.to_csv("homes.csv")