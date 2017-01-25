var React = require('react');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var AppHeader = React.createClass ({
  searchButtonPressed: function () {
    var query = document.getElementById("searchQuery").value;
    browserHistory.push('/search-results/' + query);
  },
  render: function () {
    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                BDoffers
              </Link>
              <form className="navbar-form navbar-left" role="search">
                <div className="input-group">
                  <input type="text" className="form-control" id="searchQuery" placeholder="Search Offers..."/>
                  <div className="input-group-btn">
                    <button className="btn btn-default" onClick={this.searchButtonPressed}>Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    )
  }
});

module.exports = AppHeader;