import requests

def get_lat_lng(address):
    API_KEY = "AIzaSyCOxasQdZ1CA-d1rg6gkMEEoJ4mDQB5-wM"
    API_URL = "https://maps.googleapis.com/maps/api/geocode/json"

    request_url = API_URL + "?address=" + address + "&key=" + API_KEY

    response = requests.get(request_url)
    response_json = response.json()
    
    if response_json["status"] == "OK":
        lat = response_json["results"][0]["geometry"]["location"]["lat"]
        lng = response_json["results"][0]["geometry"]["location"]["lng"]
        return (lat, lng)
    else:
        return None

address = "1600 Amphitheatre Parkway, Mountain View, CA"
lat_lng = get_lat_lng(address)
print(lat_lng)
