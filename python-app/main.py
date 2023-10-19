import calendar

print('Welcome to the 2.00 Calendar application!')

year = int(input('Please enter any year:'))
month = int(input('Please enter any month number:'))

print(calendar.month(year, month))

print('Have a nice day!')