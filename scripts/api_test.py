import requests

def post_user(link, data):
    url = link + '/user'
    try:
        response = requests.post(url, json=data)
        response.raise_for_status()  # Check if the request was successful
        return response.json()  # Assuming the response is in JSON format
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}"

if __name__ == "__main__":
    exit = False
    link = 'http://localhost:3000/api'
    name = input('Name: ')
    email = input('email: ')
    password = input('password: ')
    data = {
        "name": name,
        "email": email,
        "password": password
    }
    result = post_user(link,data)
    print(result)