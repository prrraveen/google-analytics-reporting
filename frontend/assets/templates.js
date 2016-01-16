this["JST"] = this["JST"] || {};

this["JST"]["layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id=\'navigation\'></div>\n<div id=\'main\'></div>\n';

}
return __p
};

this["JST"]["navigation"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-default">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Test Project</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav navbar-right">\n        <li><a href="#users">All Users</a></li>\n        <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">\n              ' +
((__t = ( user.get_name() )) == null ? '' : __t) +
'\n              <span class="caret"></span>\n          </a>\n          <ul class="dropdown-menu">\n              <li class="user-footer">\n                  <a href="#user/' +
((__t = ( user.get_email() )) == null ? '' : __t) +
'" class="btn btn-default btn-flat">User Profile</a>\n              </li>\n              <li class="user-footer">\n                  <a href="#logout" class="btn btn-default btn-flat">Sign out</a>\n              </li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n';

}
return __p
};

this["JST"]["like_graph"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class=\'col-sm-6 text-right\'>\n          <nav>\n              <ul class="pagination x-axis-duration">\n                  <li><a class="pointer" id=\'hourly\'>Hourly <span class="sr-only">(current)</span></a></li>\n                  <li class="active"><a class="pointer" id=\'day\'>Day <span class="sr-only">(current)</span></a></li>\n                  <li><a class="pointer" id=\'week\'>Week <span class="sr-only">(current)</span></a></li>\n                  <li><a class="pointer" id=\'month\'>Month <span class="sr-only">(current)</span></a></li>\n              </ul>\n          </nav>\n    </div>\n</div>\n<div class="row">\n    <div class=\'col-sm-12\' id=\'like-chart\'>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["no-users"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>No users found</p>\n';

}
return __p
};

this["JST"]["signin"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<br>\n<div class="container">\n    <div class="row">\n        <div class=\'col-sm-4 col-sm-offset-4 well\' >\n            <div class="row">\n                <div class=\'col-sm-12 text-center\'>\n                    <h3>Sign In</h3>\n                </div>\n            </div>\n            <ul id=\'error\'>\n            </ul>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="email">Email</label>\n                    <input id=\'email\' class=\'form-control\' placeholder="Email" required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="password">password</label>\n                    <input type=\'password\' id=\'password\' class=\'form-control\' placeholder="Password" required></input>\n                </div>\n            </div>\n             <button type="button" id=\'create\' class="btn btn-primary btn-block">Submit</button>\n             <hr>\n             <div class="row">\n                 <div class=\'col-sm-12 text-center\'>\n                     <p>\n                         Don\'t have an access?\n                         <span><a href="#signup">Sign Up</a></span>\n                     </p>\n                 </div>\n             </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["signup"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<br>\n<div class="container">\n    <div class="row">\n        <div class=\'col-sm-4 col-sm-offset-4 well\' >\n            <div class="row">\n                <div class=\'col-sm-12 text-center\'>\n                    <h3>Sign Up</h3>\n                </div>\n            </div>\n            <ul id=\'error\'>\n            </ul>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="name">Name</label>\n                    <input id=\'name\' class=\'form-control\' placeholder="Full Name" required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="email">Email</label>\n                    <input id=\'email\' class=\'form-control\' placeholder="Email" required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="password">password</label>\n                    <input type=\'password\' id=\'password\' class=\'form-control\' placeholder="Password" required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                     <label for="password">Confirm password</label>\n                    <input type=\'password\' id=\'confirm-password\' class=\'form-control\' placeholder="Confirm Password" required></input>\n                </div>\n            </div>\n            <div class="row">\n                <div class=\'col-sm-12 form-group\'>\n                    <button type="button" id=\'signup\' class="btn btn-primary btn-block">Sign Up</button>\n                </div>\n            </div>\n             <hr>\n             <div class="row">\n                 <div class=\'col-sm-12 text-center\'>\n                     <p>\n                         Already have access?\n                         <span><a href="#signin">Sign In</a></span>\n                     </p>\n                 </div>\n             </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["user_detail_itemview"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = ( first_name )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( email )) == null ? '' : __t) +
'</td>\n';

}
return __p
};

this["JST"]["user_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    <div class="row">\n        <div class=\'col-sm-12\'>\n            <table id=\'table\' class=\'table table-hover table-bordered\'>\n                <thead>\n                    <tr>\n                        <td>\n                            User Name\n                        </td>\n                        <td>\n                            Email\n                        </td>\n                    </tr>\n                </thead>\n                <tbody>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["user_profile"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    <div class="row">\n        <div class=\'col-sm-12\'>\n            <div class="panel panel-default">\n              <div class="panel-heading">\n                  <div class="row">\n                      <div class=\'col-sm-6\'>\n                          <h3>' +
((__t = ( user.get_name() )) == null ? '' : __t) +
'</h3>\n                      </div>\n                      <div class="col-sm-6 text-right">\n                          <button type="button" id=\'hit-like\' class="btn btn-primary">\n                              <span class=\'glyphicon glyphicon-thumbs-up\'></span>\n                              Like\n                          </button>\n                      </div>\n                  </div>\n              </div>\n\n              <div class="panel-body">\n                  <div>\n                    <!-- Nav tabs -->\n                    <ul class="nav nav-tabs" role="tablist">\n                      <li role="presentation" class="active"><a id=\'#page-views-a\' href="#page-views" aria-controls="page-views" role="tab" data-toggle="tab">Page Views</a></li>\n                      <li role="presentation"><a id=\'page-likes-a\' href="#page-likes" aria-controls="page-likes" role="tab" data-toggle="tab">Likes</a></li>\n                    </ul>\n\n                    <!-- Tab panes -->\n                    <div class="tab-content">\n                      <div role="tabpanel" class="tab-pane active" id="page-views">\n                      </div>\n                      <div role="tabpanel" class="tab-pane" id="page-likes">\n                      </div>\n                    </div>\n\n                  </div>\n              </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["view_graph"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class=\'col-sm-6 text-left\'>\n        <h3>Page Views</h3>\n    </div>\n    <div class=\'col-sm-6 text-right\'>\n          <nav>\n              <ul class="pagination x-axis-duration">\n                  <li ><a class="pointer " id=\'hourly\'>Hourly <span class="sr-only">(current)</span></a></li>\n                  <li class="active"><a class="pointer" id=\'day\'>Day <span class="sr-only">(current)</span></a></li>\n                  <li><a class="pointer" id=\'week\'>Week <span class="sr-only">(current)</span></a></li>\n                  <li><a class="pointer" id=\'month\'>Month <span class="sr-only">(current)</span></a></li>\n              </ul>\n          </nav>\n    </div>\n</div>\n<div class="row">\n    <div class=\'col-sm-12\' id=\'gchart\'>\n    </div>\n</div>\n';

}
return __p
};