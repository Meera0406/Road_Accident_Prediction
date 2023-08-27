import requests

def get_coordinates(location):
    url = f"https://nominatim.openstreetmap.org/search?q={location}&format=json"
    response = requests.get(url)
    data = response.json()
    if data:
        first_result = data[0]
        lat = first_result['lat']
        lon = first_result['lon']
        return lat, lon
    return None, None
