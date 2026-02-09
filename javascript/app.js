"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* global SwaggerUIBundle, SwaggerUIStandalonePreset, axios */
var app = {
  el: '#app',
  data: {
    host: 'vue3-course-api.hexschool.io'
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('./data/swagger_output.json');

              case 3:
                res = _context.sent;
                res.data.host = app.data.host;

                _this.swaggerFn(res.data);

                _this.hideModels();

                _this.createdDesc();

                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    hideModels: function hideModels() {
      // eslint-disable-next-line no-undef
      var models = document.querySelector('html body div#app section.swagger-ui.swagger-container div.swagger-ui div div.wrapper section.block.col-12.block-desktop.col-12-desktop section.models.is-open');
      models.remove();
    },
    createdDesc: function createdDesc() {
      // eslint-disable-next-line no-undef
      var md = document.querySelector('html body div#app section.swagger-ui.swagger-container div.swagger-ui div div.information-container.wrapper section.block.col-12 div div.info div.description div.markdown');
      md.innerHTML = "<p>\n        \u6253\u7834\u5F71\u97F3\u8AB2\u7A0B\u552E\u5F8C\u4E0D\u7406\uFF0C\u6211\u5011\u5728\u7DDA\u4E0A\u7B49\u8457\u4F60\u3002<br/>\n        \u6CE8\u610F\u4E8B\u9805\uFF1A\u767B\u5165\u6210\u529F\u5F8C\u8ACB\u9EDE\u300CAuthorize\u300D\u8F38\u5165 Token\u3002<br/><br/>\n        \n        \u7BC4\u4F8B\u7A0B\u5F0F\u78BC\uFF1A\n        <pre>\n          <code>\n  const config = {\n    headers: { Authorization: token },\n  };\n  axios\n    .post('/V2/api/user/check', {}, config)\n      .then((res) => {\n        console.log(res.data);\n      }).catch((error) => {\n        console.log(error.response.data);\n      })\n          </code>\n        </pre>\n      </p>\n      ";
    },
    swaggerFn: function swaggerFn(data) {
      // eslint-disable-next-line no-undef
      window.ui = SwaggerUIBundle({
        spec: data,
        dom_id: app.el,
        deepLinking: true,
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        plugins: [SwaggerUIBundle.plugins.DownloadUrl],
        layout: 'StandaloneLayout'
      });
    }
  },
  created: function created() {
    this.methods.getData();
  }
}; // eslint-disable-next-line no-undef

window.onload = function () {
  app.created();
};
//# sourceMappingURL=app.js.map
