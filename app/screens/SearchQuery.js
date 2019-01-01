const FilterQuery = gql`
query location($latitude: Float!, $longitude: Float!){
  search(latitude:$latitude,
         longitude:$longitude,
         radius: 2000,
         limit: 5) {
    business {
      name
      id
      alias
      rating
      url
      photos
      address
      open_now
      price 
    }
  }
}
`;

BusinessQuery = gql`
query business() {
  Busines(latitude:$latitude,
         longitude:$longitude,
         radius: 2000,
         limit: 5) {
    business {
      name
      id
      alias
      rating
      url
      photos
      address
      open_now
      price 
    }
  }
}
`;