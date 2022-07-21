from lib2to3.pgen2 import driver
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time
driver=webdriver.Chrome(executable_path=ChromeDriverManager().install())
driver.maximize_window()
driver.get(" http://localhost:3000")

driver.find_element(By.ID,"Input1").send_keys("Suyash")
time.sleep(10)
driver.close()