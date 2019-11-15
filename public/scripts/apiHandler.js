class APIHandler {
  constructor(baseUrl) {
    this.service = axios.create({
      baseURL: baseUrl
    });
  }
  getProductByTag(id) {
    return this.service.get(`/tags/${id}`);
  }
}
// thing to fixed this week end, try to connect the DB with the axios and render the product filter by the tags
