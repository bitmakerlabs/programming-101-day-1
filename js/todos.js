$(document).on('ready', function() {

  // Toggle css class denoting completion when items are clicked
  $('.todo a').on('click', function() {
    // Toggle class on the parent of the clicked element
  });

  // Handle events for filter clicks
  $('.todo-filter').on('click', function() {
    // Remove class that makes a filter "active" for all filters
  });

  $('.todo-filter.all').on('click', function() {
    // Show all todos
    // Make the "all" filter show as active
  });

  $('.todo-filter.remaining').on('click', function() {
    // Show all todos
    // Hide only those that are complete
    // Make the "remaining" filter show as active
  });

  $('.todo-filter.completed').on('click', function() {
    // Hide all todos
    // Show only todos that are complete
    // Make the "completed" filter show as active
  });

});
