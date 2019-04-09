const apiKey = 'gkuIpkP32hSB1Jy1dO4uNwAGmw7Zr0qhjULoCkSWYihy1Uc2Lbx5mgRtpzDUvcnPEGM8zFidzQQOzUelKGW_tNaqNl-6R8L-SJvcEY2VXi46K0RlXdyR0zz31S6sXHYx';

const Yelp = {

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {return response.json()}).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.display_address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    });
  }
}

export default Yelp;
