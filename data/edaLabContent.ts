
import { Experiment } from './dbmsLabContent';

export const EDA_LAB_EXPERIMENTS: Experiment[] = [
  {
    id: 'eda-exp1',
    title: 'Experiment 01: NumPy & Pandas Basics',
    description: 'Perform NumPy Array operations and loading datasets into Pandas DataFrames with row/column selection.',
    content: [
      {
        subtitle: 'NumPy Basic Operations',
        sql: `import numpy as np

# Create Array
arr = np.array([1, 2, 3, 4, 5])

# Basic Operations
arr_add = arr + 10
arr_mean = np.mean(arr)
arr_std = np.std(arr)

print(f"Mean: {arr_mean}, Std Dev: {arr_std}")`,
      },
      {
        subtitle: 'Pandas Loading & Selection',
        sql: `import pandas as pd

# Load dataset
df = pd.read_csv('used_cars_data.csv')

# Selecting Columns
name_col = df['Name']
subset = df[['Name', 'Fuel_Type']]

# Row Filtering
expensive_cars = df[df['Kilometers_Driven'] > 25000]

# Selection by index (loc)
specific_data = df.loc[0:3, ['Name', 'Price']]`,
      }
    ]
  },
  {
    id: 'eda-exp2',
    title: 'Experiment 02: Visual Aids for EDA',
    description: 'Applying different visualization techniques using Matplotlib and Seaborn including Scatter, Line, and Bar plots.',
    content: [
      {
        subtitle: 'Basic Plotting (Matplotlib)',
        sql: `import matplotlib.pyplot as plt
import pandas as pd

data = {
    "Year": [2017, 2018, 2019, 2020, 2021],
    "Sales": [200, 300, 400, 350, 500]
}
df = pd.DataFrame(data)

plt.plot(df["Year"], df["Sales"], marker='o')
plt.title('Sales Over Years')
plt.show()`,
      },
      {
        subtitle: 'Seaborn Scatter Plot (Iris Dataset)',
        sql: `import seaborn as sns
import matplotlib.pyplot as plt

iris = sns.load_dataset('iris')
sns.scatterplot(data=iris, x='sepal_length', y='petal_length', hue='species')
plt.title('Iris Dataset Visualization')
plt.show()`,
      }
    ]
  },
  {
    id: 'eda-exp3',
    title: 'Experiment 03: Data Transformation',
    description: 'Merging, Concatenating, Reshaping (Stack/Unstack), and handling missing data using fillna/dropna.',
    content: [
      {
        subtitle: 'Merging DataFrames',
        sql: `import pandas as pd

df1 = pd.DataFrame({'ID': [1, 2], 'Name': ['Alice', 'Bob']})
df2 = pd.DataFrame({'ID': [1, 2], 'Score': [85, 90]})

merged = pd.merge(df1, df2, on='ID', how='inner')`,
      },
      {
        subtitle: 'Handling Missing Values',
        sql: `# Impute with mean
df['Age'] = df['Age'].fillna(df['Age'].mean())

# Drop duplicates
df = df.drop_duplicates()`,
      }
    ]
  },
  {
    id: 'eda-exp4',
    title: 'Experiment 04: Descriptive Statistics',
    description: 'Study of distribution techniques (Normal, Uniform, Binomial) and measures of Central Tendency.',
    content: [
      {
        subtitle: 'Normal Distribution Plot',
        sql: `import numpy as np
import matplotlib.pyplot as plt

data = np.random.normal(loc=0, scale=1, size=1000)
plt.hist(data, bins=30, density=True, color='blue', alpha=0.6)
plt.title('Normal Distribution')
plt.show()`,
      },
      {
        subtitle: 'Central Tendency & IQR',
        sql: `mean_val = df['Age'].mean()
median_val = df['Age'].median()
mode_val = df['Age'].mode()[0]

# Interquartile Range
Q1, Q3 = np.percentile(df['Age'], [25, 75])
IQR = Q3 - Q1`,
      }
    ]
  },
  {
    id: 'eda-exp5',
    title: 'Experiment 05: Model Evaluation',
    description: 'Training a model using Train-Test split and evaluating performance with R2, MAE, and MSE metrics.',
    content: [
      {
        subtitle: 'Linear Regression & Metrics',
        sql: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"R2 Score: {r2_score(y_test, y_pred)}")`,
      }
    ]
  }
];
