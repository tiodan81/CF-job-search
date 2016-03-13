module.exports = function(app) {
  require('./controllers/job_search_controller')(app);
  require('./controllers/company_controller')(app);
  require('./services/job_data_service')(app);
  require('./filters/unique_filter')(app);
};
