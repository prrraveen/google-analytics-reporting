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
__p += '<nav class="navbar navbar-default">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Test Project</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav navbar-right">\n        <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">\n              ' +
((__t = ( user.get_name() )) == null ? '' : __t) +
'\n              <span class="caret"></span>\n          </a>\n          <ul class="dropdown-menu">\n              <li class="user-footer">\n                  <a href="#user/' +
((__t = ( user.get_email() )) == null ? '' : __t) +
'" class="btn btn-default btn-flat">User Profile</a>\n              </li>\n              <li class="user-footer">\n                  <a href="#logout" class="btn btn-default btn-flat">Sign out</a>\n              </li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n';

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

this["JST"]["user_profile"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    <div class="row">\n        <div class=\'col-sm-12\'>\n            <div class="panel panel-default">\n              <div class="panel-heading">\n                  <div class="row">\n                      <div class=\'col-sm-6\'>\n                          <h3>' +
((__t = ( user.get_name() )) == null ? '' : __t) +
'</h3>\n                      </div>\n                      <div class="col-sm-6 text-right">\n                          <button type="button" class="btn btn-primary">\n                              <span class=\'glyphicon glyphicon-thumbs-up\'></span>\n                              Like\n                          </button>\n                      </div>\n                  </div>\n              </div>\n\n              <div class="panel-body">\n                  <div>\n\n                    <!-- Nav tabs -->\n                    <ul class="nav nav-tabs" role="tablist">\n                      <li role="presentation" class="active"><a href="#page-views" aria-controls="page-views" role="tab" data-toggle="tab">Page Views</a></li>\n                      <li role="presentation"><a href="#likes" aria-controls="likes" role="tab" data-toggle="tab">Likes</a></li>\n                    </ul>\n\n                    <!-- Tab panes -->\n                    <div class="tab-content">\n                      <div role="tabpanel" class="tab-pane active" id="page-views">\n                          <div class="row">\n                              <div class=\'col-sm-4\' id=\'gchart\'>\n                              </div>\n                          </div>\n                      </div>\n                      <div role="tabpanel" class="tab-pane" id="likes">B</div>\n                    </div>\n\n                  </div>\n              </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};