module.exports = {
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply({
      is_a_thing: false
    });
  }
}
