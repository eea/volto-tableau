/*! tableau-2.1.2 */
/* eslint-disable  */
!(function () {
  /*! BEGIN MscorlibSlim */
  var e = {};
  !(function (e) {
    var t,
      i,
      n,
      r,
      a = { __assemblies: {} };
    (a.initAssembly = function (e, t, i) {
      (i = i || {}),
        (e.name = t),
        (e.toString = function () {
          return this.name;
        }),
        (e.__types = {}),
        (e.getResourceNames = function () {
          return Object.keys(i);
        }),
        (e.getResourceDataBase64 = function (e) {
          return i[e] || null;
        }),
        (e.getResourceData = function (e) {
          var t = i[e];
          return t ? a.dec64(t) : null;
        }),
        (a.__assemblies[t] = e);
    }),
      a.initAssembly(a, 'mscorlib'),
      (a.getAssemblies = function () {
        return Object.keys(a.__assemblies).map(function (e) {
          return a.__assemblies[e];
        });
      }),
      (a.isNullOrUndefined = function (e) {
        return null == e;
      }),
      (a.isValue = function (e) {
        return null != e;
      }),
      (a.referenceEquals = function (e, t) {
        return a.isValue(e) ? e === t : !a.isValue(t);
      }),
      (a.mkdict = function () {
        for (
          var e = 1 != arguments.length ? arguments : arguments[0],
            t = {},
            i = 0;
          i < e.length;
          i += 2
        )
          t[e[i]] = e[i + 1];
        return t;
      }),
      (a.clone = function (e, t) {
        return t ? e.$clone(t) : t;
      }),
      (a.coalesce = function (e, t) {
        return a.isValue(e) ? e : t;
      }),
      (a.isDate = function (e) {
        return '[object Date]' === Object.prototype.toString.call(e);
      }),
      (a.isArray = function (e) {
        return '[object Array]' === Object.prototype.toString.call(e);
      }),
      (a.isTypedArrayType = function (e) {
        return (
          [
            'Float32Array',
            'Float64Array',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Uint8Array',
            'Uint16Array',
            'Uint32Array',
            'Uint8ClampedArray',
          ].indexOf(a.getTypeFullName(e)) >= 0
        );
      }),
      (a.isArrayOrTypedArray = function (e) {
        return a.isArray(e) || a.isTypedArrayType(a.getInstanceType(e));
      }),
      (a.getHashCode = function (e) {
        if (a.isValue(e)) {
          if ('function' == typeof e.getHashCode) return e.getHashCode();
          if ('boolean' == typeof e) return e ? 1 : 0;
          if ('number' == typeof e) {
            var t = e.toExponential();
            return (
              (t = t.substr(0, t.indexOf('e'))),
              4294967295 & parseInt(t.replace('.', ''), 10)
            );
          }
          if ('string' == typeof e) {
            for (var i = 0, n = 0; n < e.length; n++)
              i = (31 * i + e.charCodeAt(n)) & 4294967295;
            return i;
          }
          return a.isDate(e) ? 4294967295 & e.valueOf() : a.defaultHashCode(e);
        }
        throw new M('Cannot get hash code of null');
      }),
      (a.defaultHashCode = function (e) {
        return (
          e.$__hashCode__ ||
          (e.$__hashCode__ = (4294967296 * Math.random()) | 0)
        );
      }),
      (a.equals = function (e, t) {
        if (!a.isValue(e)) throw new M('Object is null');
        return e !== a && 'function' == typeof e.equals
          ? e.equals(t)
          : a.isDate(e) && a.isDate(t)
          ? e.valueOf() === t.valueOf()
          : 'function' == typeof e && 'function' == typeof t
          ? a.delegateEquals(e, t)
          : !(!a.isNullOrUndefined(e) || !a.isNullOrUndefined(t)) || e === t;
      }),
      (a.compare = function (e, t) {
        if (a.isValue(e))
          return 'number' == typeof e ||
            'string' == typeof e ||
            'boolean' == typeof e
            ? e < t
              ? -1
              : e > t
              ? 1
              : 0
            : a.isDate(e)
            ? a.compare(e.valueOf(), t.valueOf())
            : e.compareTo(t);
        throw new M('Object is null');
      }),
      (a.equalsT = function (e, t) {
        if (a.isValue(e))
          return 'number' == typeof e ||
            'string' == typeof e ||
            'boolean' == typeof e
            ? e === t
            : a.isDate(e)
            ? e.valueOf() === t.valueOf()
            : e.equalsT(t);
        throw new M('Object is null');
      }),
      (a.staticEquals = function (e, t) {
        return a.isValue(e) ? !!a.isValue(t) && a.equals(e, t) : !a.isValue(t);
      }),
      (a.shallowCopy = function (e, t) {
        for (var i = Object.keys(e), n = 0, r = i.length; n < r; n++) {
          var a = i[n];
          t[a] = e[a];
        }
      }),
      (a.isLower = function (e) {
        var t = String.fromCharCode(e);
        return t === t.toLowerCase() && t !== t.toUpperCase();
      }),
      (a.isUpper = function (e) {
        var t = String.fromCharCode(e);
        return t !== t.toLowerCase() && t === t.toUpperCase();
      }),
      'object' == typeof window &&
        (window.Element ||
          ((window.Element = function () {}),
          (window.Element.isInstanceOfType = function (e) {
            return (
              e && void 0 === e.constructor && 'string' == typeof e.tagName
            );
          })),
        (window.Element.__typeName = 'Element')),
      (a.clearKeys = function (e) {
        for (var t in e) e.hasOwnProperty(t) && delete e[t];
      }),
      (a.keyExists = function (e, t) {
        return void 0 !== e[t];
      }),
      Object.keys ||
        (Object.keys =
          ((t = Object.prototype.hasOwnProperty),
          (i = !{ toString: null }.propertyIsEnumerable('toString')),
          (r = (n = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor',
          ]).length),
          function (e) {
            if ('object' != typeof e && ('function' != typeof e || null === e))
              throw new TypeError('Object.keys called on non-object');
            var a,
              s,
              o = [];
            for (a in e) t.call(e, a) && o.push(a);
            if (i) for (s = 0; s < r; s++) t.call(e, n[s]) && o.push(n[s]);
            return o;
          })),
      (a.getKeyCount = function (e) {
        return Object.keys(e).length;
      }),
      (a.__genericCache = {}),
      (a._makeGenericTypeName = function (e, t) {
        for (var i = e.__typeName, n = 0; n < t.length; n++)
          i += (0 === n ? '[' : ',') + '[' + a.getTypeQName(t[n]) + ']';
        return (i += ']');
      }),
      (a.makeGenericType = function (e, t) {
        var i = a._makeGenericTypeName(e, t);
        return a.__genericCache[i] || e.apply(null, t);
      }),
      (a.registerGenericClassInstance = function (e, t, i, n, r, s) {
        var o = a._makeGenericTypeName(t, i);
        (a.__genericCache[o] = e),
          (e.__typeName = o),
          (e.__genericTypeDefinition = t),
          (e.__typeArguments = i),
          a.initClass(e, t.__assembly, n, r(), s());
      }),
      (a.registerGenericInterfaceInstance = function (e, t, i, n, r) {
        var s = a._makeGenericTypeName(t, i);
        (a.__genericCache[s] = e),
          (e.__typeName = s),
          (e.__genericTypeDefinition = t),
          (e.__typeArguments = i),
          a.initInterface(e, t.__assembly, n, r());
      }),
      (a.isGenericTypeDefinition = function (e) {
        return e.__isGenericTypeDefinition || !1;
      }),
      (a.getGenericTypeDefinition = function (e) {
        return e.__genericTypeDefinition || null;
      }),
      (a.getGenericParameterCount = function (e) {
        return e.__typeArgumentCount || 0;
      }),
      (a.getGenericArguments = function (e) {
        return e.__typeArguments || null;
      }),
      (a.setMetadata = function (e, t) {
        if (t.members)
          for (var i = 0; i < t.members.length; i++) {
            var n = t.members[i];
            (n.typeDef = e),
              n.adder && (n.adder.typeDef = e),
              n.remover && (n.remover.typeDef = e),
              n.getter && (n.getter.typeDef = e),
              n.setter && (n.setter.typeDef = e);
          }
        (e.__metadata = t),
          t.variance &&
            (e.isAssignableFrom = function (e) {
              var t = function (e, t) {
                if (
                  t.__genericTypeDefinition === e.__genericTypeDefinition &&
                  t.__typeArguments.length == e.__typeArguments.length
                ) {
                  for (var i = 0; i < e.__typeArguments.length; i++) {
                    var n = e.__metadata.variance[i],
                      r = e.__typeArguments[i],
                      s = t.__typeArguments[i];
                    switch (n) {
                      case 1:
                        if (!a.isAssignableFrom(r, s)) return !1;
                        break;
                      case 2:
                        if (!a.isAssignableFrom(s, r)) return !1;
                        break;
                      default:
                        if (s !== r) return !1;
                    }
                  }
                  return !0;
                }
                return !1;
              };
              if (e.__interface && t(this, e)) return !0;
              for (var i = a.getInterfaces(e), n = 0; n < i.length; n++)
                if (i[n] === this || t(this, i[n])) return !0;
              return !1;
            });
      }),
      (a.setMetadata = function (e, t) {}),
      (a.initClass = function (e, t, i, n, r) {
        if (
          ((e.__class = !0),
          (e.__assembly = t),
          e.__typeArguments || (t.__types[e.__typeName] = e),
          n && n !== Object)
        ) {
          var s = function () {};
          (s.prototype = n.prototype),
            (e.prototype = new s()),
            (e.prototype.constructor = e);
        }
        a.shallowCopy(i, e.prototype), r && (e.__interfaces = r);
      }),
      (a.initGenericClass = function (e, t, i) {
        (e.__class = !0),
          (e.__assembly = t),
          (t.__types[e.__typeName] = e),
          (e.__typeArgumentCount = i),
          (e.__isGenericTypeDefinition = !0);
      }),
      (a.initInterface = function (e, t, i, n) {
        (e.__interface = !0),
          (e.__assembly = t),
          e.__typeArguments || (t.__types[e.__typeName] = e),
          n && (e.__interfaces = n),
          a.shallowCopy(i, e.prototype),
          (e.isAssignableFrom = function (e) {
            return a.contains(a.getInterfaces(e), this);
          });
      }),
      (a.initGenericInterface = function (e, t, i) {
        (e.__interface = !0),
          (e.__assembly = t),
          (t.__types[e.__typeName] = e),
          (e.__typeArgumentCount = i),
          (e.__isGenericTypeDefinition = !0);
      }),
      (a.initEnum = function (e, t, i, n) {
        (e.__enum = !0),
          (e.__assembly = t),
          (t.__types[e.__typeName] = e),
          a.shallowCopy(i, e.prototype),
          (e.getDefaultValue = e.createInstance = function () {
            return n ? null : 0;
          }),
          (e.isInstanceOfType = function (e) {
            return typeof e == (n ? 'string' : 'number');
          });
      }),
      (a.getBaseType = function (e) {
        if (e === Object || e.__interface) return null;
        if (Object.getPrototypeOf)
          return Object.getPrototypeOf(e.prototype).constructor;
        var t = e.prototype;
        if (Object.prototype.hasOwnProperty.call(t, 'constructor'))
          try {
            var i = t.constructor;
            return delete t.constructor, t.constructor;
          } finally {
            t.constructor = i;
          }
        return t.constructor;
      }),
      (a.getTypeFullName = function (e) {
        return (
          e.__typeName ||
          e.name ||
          (e.toString().match(/^\s*function\s*([^\s(]+)/) || [])[1] ||
          'Object'
        );
      }),
      (a.getTypeQName = function (e) {
        return (
          a.getTypeFullName(e) + (e.__assembly ? ', ' + e.__assembly.name : '')
        );
      }),
      (a.getTypeName = function (e) {
        var t = a.getTypeFullName(e),
          i = t.indexOf('['),
          n = t.lastIndexOf('.', i >= 0 ? i : t.length);
        return n > 0 ? t.substr(n + 1) : t;
      }),
      (a.getTypeNamespace = function (e) {
        var t = a.getTypeFullName(e),
          i = t.indexOf('['),
          n = t.lastIndexOf('.', i >= 0 ? i : t.length);
        return n > 0 ? t.substr(0, n) : '';
      }),
      (a.getTypeAssembly = function (e) {
        return a.contains([Date, Number, Boolean, String, Function, Array], e)
          ? a
          : e.__assembly || null;
      }),
      (a._getAssemblyType = function (e, t) {
        if (e.__types) return e.__types[t] || null;
        for (var i = t.split('.'), n = 0; n < i.length; n++)
          if (((e = e[i[n]]), !a.isValue(e))) return null;
        return 'function' != typeof e ? null : e;
      }),
      (a.getAssemblyTypes = function (e) {
        var t = [];
        if (e.__types)
          for (var i in e.__types)
            e.__types.hasOwnProperty(i) && t.push(e.__types[i]);
        else {
          var n = function (e, i) {
            for (var r in e) e.hasOwnProperty(r) && n(e[r], r);
            'function' == typeof e && a.isUpper(i.charCodeAt(0)) && t.push(e);
          };
          n(e, '');
        }
        return t;
      }),
      (a.createAssemblyInstance = function (e, t) {
        var i = a.getType(t, e);
        return i ? a.createInstance(i) : null;
      }),
      (a.getInterfaces = function (e) {
        return e.__interfaces
          ? e.__interfaces
          : e === Date || e === Number
          ? [l, o, s]
          : e === Boolean || e === String
          ? [l, o]
          : e === Array || a.isTypedArrayType(e)
          ? [h, m, g]
          : [];
      }),
      (a.isInstanceOfType = function (e, t) {
        return (
          !a.isNullOrUndefined(e) &&
          ('function' == typeof t.isInstanceOfType
            ? t.isInstanceOfType(e)
            : a.isAssignableFrom(t, a.getInstanceType(e)))
        );
      }),
      (a.isAssignableFrom = function (e, t) {
        return (
          e === t ||
          ('function' == typeof e.isAssignableFrom && e.isAssignableFrom(t)) ||
          t.prototype instanceof e
        );
      }),
      (a.isClass = function (e) {
        return (
          1 == e.__class ||
          e === Array ||
          e === Function ||
          e === RegExp ||
          e === String ||
          e === Error ||
          e === Object
        );
      }),
      (a.isEnum = function (e) {
        return !!e.__enum;
      }),
      (a.isFlags = function (e) {
        return (e.__metadata && e.__metadata.enumFlags) || !1;
      }),
      (a.isInterface = function (e) {
        return !!e.__interface;
      }),
      (a.safeCast = function (e, t) {
        return !0 === t
          ? e
          : !1 === t
          ? null
          : a.isInstanceOfType(e, t)
          ? e
          : null;
      }),
      (a.cast = function (e, t) {
        if (null == e) return e;
        if (!0 === t || (!1 !== t && a.isInstanceOfType(e, t))) return e;
        throw new x('Cannot cast object to type ' + a.getTypeFullName(t));
      }),
      (a.getInstanceType = function (e) {
        if (!a.isValue(e)) throw new M('Cannot get type of null');
        try {
          return e.constructor;
        } catch (e) {
          return Object;
        }
      }),
      (a._getType = function (t, i, n) {
        var r,
          s = !n,
          o = (n = n || /[[,\]]/g).lastIndex,
          l = n.exec(t),
          u = [];
        if (l)
          switch (((r = t.substring(o, l.index)), l[0])) {
            case '[':
              if ('[' != t[l.index + 1]) return null;
              for (;;) {
                if ((n.exec(t), !(c = a._getType(t, e, n)))) return null;
                if ((u.push(c), ']' === (l = n.exec(t))[0])) break;
                if (',' !== l[0]) return null;
              }
              if (
                (l = n.exec(t)) &&
                ',' === l[0] &&
                (n.exec(t),
                !(i =
                  a.__assemblies[
                    (n.lastIndex > 0
                      ? t.substring(l.index + 1, n.lastIndex - 1)
                      : t.substring(l.index + 1)
                    ).trim()
                  ]))
              )
                return null;
              break;
            case ']':
              break;
            case ',':
              if (
                (n.exec(t),
                !(i =
                  a.__assemblies[
                    (n.lastIndex > 0
                      ? t.substring(l.index + 1, n.lastIndex - 1)
                      : t.substring(l.index + 1)
                    ).trim()
                  ]))
              )
                return null;
              break;
          }
        else r = t.substring(o);
        if (s && n.lastIndex) return null;
        var c = a._getAssemblyType(i, r.trim());
        return u.length ? a.makeGenericType(c, u) : c;
      }),
      (a.getType = function (t, i) {
        return t ? a._getType(t, i || e) : null;
      }),
      (a.getDefaultValue = function (e) {
        return 'function' == typeof e.getDefaultValue
          ? e.getDefaultValue()
          : e !== Boolean &&
              (e === Date ? new Date(0) : e === Number ? 0 : null);
      }),
      (a.createInstance = function (e) {
        return 'function' == typeof e.createInstance
          ? e.createInstance()
          : e !== Boolean &&
              (e === Date
                ? new Date(0)
                : e === Number
                ? 0
                : e === String
                ? ''
                : new e());
      });
    var s = function () {};
    (s.__typeName = 'ss.IFormattable'),
      (a.IFormattable = s),
      a.initInterface(s, a, { format: null });
    var o = function () {};
    (o.__typeName = 'ss.IComparable'),
      (a.IComparable = o),
      a.initInterface(o, a, { compareTo: null });
    var l = function () {};
    (l.__typeName = 'ss.IEquatable'),
      (a.IEquatable = l),
      a.initInterface(l, a, { equalsT: null }),
      (a.isNullOrEmptyString = function (e) {
        return !e || !e.length;
      }),
      String.prototype.trim ||
        (String.prototype.trim = function () {
          return a.trimStartString(a.trimEndString(this));
        }),
      (a.trimEndString = function (e, t) {
        return e.replace(
          t
            ? new RegExp('[' + String.fromCharCode.apply(null, t) + ']+$')
            : /\s*$/,
          '',
        );
      }),
      (a.trimStartString = function (e, t) {
        return e.replace(
          t
            ? new RegExp('^[' + String.fromCharCode.apply(null, t) + ']+')
            : /^\s*/,
          '',
        );
      }),
      (a.trimString = function (e, t) {
        return a.trimStartString(a.trimEndString(e, t), t);
      }),
      (a.arrayClone = function (e) {
        return 1 === e.length ? [e[0]] : Array.apply(null, e);
      }),
      Array.prototype.map ||
        (Array.prototype.map = function (e, t) {
          for (var i = this.length, n = new Array(i), r = 0; r < i; r++)
            r in this && (n[r] = e.call(t, this[r], r, this));
          return n;
        }),
      Array.prototype.some ||
        (Array.prototype.some = function (e, t) {
          for (var i = this.length, n = 0; n < i; n++)
            if (n in this && e.call(t, this[n], n, this)) return !0;
          return !1;
        }),
      Array.prototype.forEach ||
        (Array.prototype.forEach = function (e, t) {
          var i, n;
          if (null == this) throw new TypeError(' this is null or not defined');
          var r = Object(this),
            a = r.length >>> 0;
          if ('function' != typeof e)
            throw new TypeError(e + ' is not a function');
          for (arguments.length > 1 && (i = t), n = 0; n < a; ) {
            var s;
            n in r && ((s = r[n]), e.call(i, s, n, r)), n++;
          }
        }),
      Array.prototype.filter ||
        (Array.prototype.filter = function (e) {
          if (null == this) throw new TypeError();
          var t = Object(this),
            i = t.length >>> 0;
          if ('function' != typeof e) throw new TypeError();
          for (
            var n = [],
              r = arguments.length >= 2 ? arguments[1] : void 0,
              a = 0;
            a < i;
            a++
          )
            if (a in t) {
              var s = t[a];
              e.call(r, s, a, t) && n.push(s);
            }
          return n;
        }),
      (a._delegateContains = function (e, t, i) {
        for (var n = 0; n < e.length; n += 2)
          if (e[n] === t && e[n + 1] === i) return !0;
        return !1;
      }),
      (a._mkdel = function (e) {
        var t = function () {
          if (2 == e.length) return e[1].apply(e[0], arguments);
          for (var t = a.arrayClone(e), i = 0; i < t.length; i += 2)
            a._delegateContains(e, t[i], t[i + 1]) &&
              t[i + 1].apply(t[i], arguments);
          return null;
        };
        return (t._targets = e), t;
      }),
      (a.mkdel = function (e, t) {
        return e ? a._mkdel([e, t]) : t;
      }),
      (a.delegateCombine = function (e, t) {
        if (!e) return t._targets ? t : a.mkdel(null, t);
        if (!t) return e._targets ? e : a.mkdel(null, e);
        var i = e._targets ? e._targets : [null, e],
          n = t._targets ? t._targets : [null, t];
        return a._mkdel(i.concat(n));
      }),
      (a.delegateRemove = function (e, t) {
        if (!e || e === t) return null;
        if (!t) return e;
        var i,
          n = e._targets,
          r = null;
        t._targets ? ((r = t._targets[0]), (i = t._targets[1])) : (i = t);
        for (var s = 0; s < n.length; s += 2)
          if (n[s] === r && n[s + 1] === i) {
            if (2 == n.length) return null;
            var o = a.arrayClone(n);
            return o.splice(s, 2), a._mkdel(o);
          }
        return e;
      }),
      (a.delegateEquals = function (e, t) {
        if (e === t) return !0;
        if (!e._targets && !t._targets) return !1;
        var i = e._targets || [null, e],
          n = t._targets || [null, t];
        if (i.length != n.length) return !1;
        for (var r = 0; r < i.length; r++) if (i[r] !== n[r]) return !1;
        return !0;
      });
    var u = function () {};
    (u.__typeName = 'ss.Enum'),
      (a.Enum = u),
      a.initClass(u, a, {}),
      (u.getValues = function (e) {
        var t = [],
          i = e.prototype;
        for (var n in i) i.hasOwnProperty(n) && t.push(i[n]);
        return t;
      });
    var c = function () {};
    (c.__typeName = 'ss.IEnumerator'),
      (a.IEnumerator = c),
      a.initInterface(c, a, { current: null, moveNext: null, reset: null }, [
        I,
      ]);
    var h = function () {};
    (h.__typeName = 'ss.IEnumerable'),
      (a.IEnumerable = h),
      a.initInterface(h, a, { getEnumerator: null }),
      (a.getEnumerator = function (e) {
        return e.getEnumerator ? e.getEnumerator() : new y(e);
      });
    var m = function () {};
    (m.__typeName = 'ss.ICollection'),
      (a.ICollection = m),
      a.initInterface(m, a, {
        get_count: null,
        add: null,
        clear: null,
        contains: null,
        remove: null,
      }),
      (a.count = function (e) {
        return e.get_count ? e.get_count() : e.length;
      }),
      (a.add = function (e, t) {
        if (e.add) e.add(t);
        else {
          if (!a.isArray(e)) throw new V();
          e.push(t);
        }
      }),
      (a.clear = function (e) {
        if (e.clear) e.clear();
        else {
          if (!a.isArray(e)) throw new V();
          e.length = 0;
        }
      }),
      (a.remove = function (e, t) {
        if (e.remove) return e.remove(t);
        if (a.isArray(e)) {
          var i = a.indexOf(e, t);
          return i >= 0 && (e.splice(i, 1), !0);
        }
        throw new V();
      }),
      (a.contains = function (e, t) {
        return e.contains ? e.contains(t) : a.indexOf(e, t) >= 0;
      });
    var d = function () {};
    (d.__typeName = 'ss.IEqualityComparer'),
      (a.IEqualityComparer = d),
      a.initInterface(d, a, { areEqual: null, getObjectHashCode: null });
    var p = function () {};
    (p.__typeName = 'ss.IComparer'),
      (a.IComparer = p),
      a.initInterface(p, a, { compare: null }),
      (a.unbox = function (e) {
        if (!a.isValue(e)) throw new U('Nullable object must have a value.');
        return e;
      });
    var f = function (e) {
      var t = function () {};
      return (
        (t.isInstanceOfType = function (t) {
          return a.isInstanceOfType(t, e);
        }),
        a.registerGenericClassInstance(
          t,
          f,
          [e],
          {},
          function () {
            return null;
          },
          function () {
            return [];
          },
        ),
        t
      );
    };
    (f.__typeName = 'ss.Nullable$1'),
      (a.Nullable$1 = f),
      a.initGenericClass(f, a, 1),
      (f.eq = function (e, t) {
        return a.isValue(e) ? e === t : !a.isValue(t);
      }),
      (f.ne = function (e, t) {
        return a.isValue(e) ? e !== t : a.isValue(t);
      }),
      (f.le = function (e, t) {
        return a.isValue(e) && a.isValue(t) && e <= t;
      }),
      (f.ge = function (e, t) {
        return a.isValue(e) && a.isValue(t) && e >= t;
      }),
      (f.lt = function (e, t) {
        return a.isValue(e) && a.isValue(t) && e < t;
      }),
      (f.gt = function (e, t) {
        return a.isValue(e) && a.isValue(t) && e > t;
      }),
      (f.sub = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e - t : null;
      }),
      (f.add = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e + t : null;
      }),
      (f.mod = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e % t : null;
      }),
      (f.div = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e / t : null;
      }),
      (f.mul = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e * t : null;
      }),
      (f.band = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e & t : null;
      }),
      (f.bor = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e | t : null;
      }),
      (f.xor = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e ^ t : null;
      }),
      (f.shl = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e << t : null;
      }),
      (f.srs = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e >> t : null;
      }),
      (f.sru = function (e, t) {
        return a.isValue(e) && a.isValue(t) ? e >>> t : null;
      }),
      (f.and = function (e, t) {
        return (!0 === e && !0 === t) || (!1 !== e && !1 !== t && null);
      }),
      (f.or = function (e, t) {
        return !0 === e || !0 === t || ((!1 !== e || !1 !== t) && null);
      }),
      (f.not = function (e) {
        return a.isValue(e) ? !e : null;
      }),
      (f.neg = function (e) {
        return a.isValue(e) ? -e : null;
      }),
      (f.pos = function (e) {
        return a.isValue(e) ? +e : null;
      }),
      (f.cpl = function (e) {
        return a.isValue(e) ? ~e : null;
      }),
      (f.lift = function () {
        for (var e = 0; e < arguments.length; e++)
          if (!a.isValue(arguments[e])) return null;
        return arguments[0].apply(
          null,
          Array.prototype.slice.call(arguments, 1),
        );
      });
    var g = function () {};
    (g.__typeName = 'ss.IList'),
      (a.IList = g),
      a.initInterface(
        g,
        a,
        {
          get_item: null,
          set_item: null,
          indexOf: null,
          insert: null,
          removeAt: null,
        },
        [m, h],
      ),
      (a.getItem = function (e, t) {
        return e.get_item ? e.get_item(t) : e[t];
      }),
      (a.setItem = function (e, t, i) {
        e.set_item ? e.set_item(t, i) : (e[t] = i);
      }),
      (a.indexOf = function (e, t) {
        if (
          (t && 'function' == typeof t.equals) ||
          'function' != typeof e.indexOf
        ) {
          if (a.isArrayOrTypedArray(e)) {
            for (var i = 0; i < e.length; i++)
              if (a.staticEquals(e[i], t)) return i;
            return -1;
          }
          return e.indexOf(t);
        }
        return e.indexOf(t);
      }),
      (a.insert = function (e, t, i) {
        if (e.insert) e.insert(t, i);
        else {
          if (!a.isArray(e)) throw new V();
          e.splice(t, 0, i);
        }
      }),
      (a.removeAt = function (e, t) {
        if (e.removeAt) e.removeAt(t);
        else {
          if (!a.isArray(e)) throw new V();
          e.splice(t, 1);
        }
      });
    var $ = function () {};
    ($.__typeName = 'ss.IDictionary'),
      (a.IDictionary = $),
      a.initInterface(
        $,
        a,
        {
          get_item: null,
          set_item: null,
          get_keys: null,
          get_values: null,
          containsKey: null,
          add: null,
          remove: null,
          tryGetValue: null,
        },
        [h],
      );
    var _ = function () {};
    (_.__typeName = 'ss.Int32'),
      (a.Int32 = _),
      a.initClass(_, a, {}, Object, [l, o, s]),
      (_.__class = !1),
      (_.isInstanceOfType = function (e) {
        return 'number' == typeof e && isFinite(e) && Math.round(e, 0) == e;
      }),
      (_.getDefaultValue = _.createInstance = function () {
        return 0;
      }),
      (_.div = function (e, t) {
        if (!a.isValue(e) || !a.isValue(t)) return null;
        if (0 === t) throw new P();
        return _.trunc(e / t);
      }),
      (_.trunc = function (e) {
        return a.isValue(e) ? (e > 0 ? Math.floor(e) : Math.ceil(e)) : null;
      }),
      (_.tryParse = function (e, t, i, n) {
        if (((t.$ = 0), !/^[+-]?[0-9]+$/.test(e))) return 0;
        var r = parseInt(e, 10);
        return !(r < i || r > n) && ((t.$ = r), !0);
      });
    var v = function () {};
    (v.__typeName = 'ss.JsDate'),
      (a.JsDate = v),
      a.initClass(v, a, {}, Object, [l, o]),
      (v.createInstance = function () {
        return new Date();
      }),
      (v.isInstanceOfType = function (e) {
        return e instanceof Date;
      });
    var y = function (e) {
      (this._array = e), (this._index = -1);
    };
    (y.__typeName = 'ss.ArrayEnumerator'),
      (a.ArrayEnumerator = y),
      a.initClass(
        y,
        a,
        {
          moveNext: function () {
            return this._index++, this._index < this._array.length;
          },
          reset: function () {
            this._index = -1;
          },
          current: function () {
            if (this._index < 0 || this._index >= this._array.length)
              throw 'Invalid operation';
            return this._array[this._index];
          },
          dispose: function () {},
        },
        null,
        [c, I],
      );
    var w = function (e) {
      (this._keys = Object.keys(e)), (this._index = -1), (this._object = e);
    };
    (w.__typeName = 'ss.ObjectEnumerator'),
      (a.ObjectEnumerator = w),
      a.initClass(
        w,
        a,
        {
          moveNext: function () {
            return this._index++, this._index < this._keys.length;
          },
          reset: function () {
            this._index = -1;
          },
          current: function () {
            if (this._index < 0 || this._index >= this._keys.length)
              throw new U('Invalid operation');
            var e = this._keys[this._index];
            return { key: e, value: this._object[e] };
          },
          dispose: function () {},
        },
        null,
        [c, I],
      );
    var S = function () {};
    (S.__typeName = 'ss.EqualityComparer'),
      (a.EqualityComparer = S),
      a.initClass(
        S,
        a,
        {
          areEqual: function (e, t) {
            return a.staticEquals(e, t);
          },
          getObjectHashCode: function (e) {
            return a.isValue(e) ? a.getHashCode(e) : 0;
          },
        },
        null,
        [d],
      ),
      (S.def = new S());
    var b = function (e) {
      this.f = e;
    };
    (b.__typeName = 'ss.Comparer'),
      (a.Comparer = b),
      a.initClass(
        b,
        a,
        {
          compare: function (e, t) {
            return this.f(e, t);
          },
        },
        null,
        [p],
      ),
      (b.def = new b(function (e, t) {
        return a.isValue(e)
          ? a.isValue(t)
            ? a.compare(e, t)
            : 1
          : a.isValue(t)
          ? -1
          : 0;
      }));
    var I = function () {};
    (I.__typeName = 'ss.IDisposable'),
      (a.IDisposable = I),
      a.initInterface(I, a, { dispose: null });
    var C = function (e) {
      (this._parts = a.isValue(e) && '' != e ? [e] : []),
        (this.length = a.isValue(e) ? e.length : 0);
    };
    (C.__typeName = 'ss.StringBuilder'),
      (a.StringBuilder = C),
      a.initClass(C, a, {
        append: function (e) {
          if (a.isValue(e)) {
            var t = e.toString();
            a.add(this._parts, t), (this.length += t.length);
          }
          return this;
        },
        appendChar: function (e) {
          return this.append(String.fromCharCode(e));
        },
        appendLine: function (e) {
          return this.append(e), this.append('\r\n'), this;
        },
        appendLineChar: function (e) {
          return this.appendLine(String.fromCharCode(e));
        },
        clear: function () {
          (this._parts = []), (this.length = 0);
        },
        toString: function () {
          return this._parts.join('');
        },
      });
    var N = function () {};
    (N.__typeName = 'ss.EventArgs'),
      (a.EventArgs = N),
      a.initClass(N, a, {}),
      (N.Empty = new N());
    var E = function (e, t) {
      (this._message = e || 'An error occurred.'),
        (this._innerException = t || null),
        (this._error = new Error());
    };
    (E.__typeName = 'ss.Exception'),
      (a.Exception = E),
      a.initClass(E, a, {
        get_message: function () {
          return this._message;
        },
        get_innerException: function () {
          return this._innerException;
        },
        get_stack: function () {
          return this._error.stack;
        },
        toString: function () {
          var e = this._message,
            t = this;
          return (
            a.isNullOrEmptyString(e) &&
              (e =
                a.isValue(a.getInstanceType(t)) &&
                a.isValue(a.getTypeFullName(a.getInstanceType(t)))
                  ? a.getTypeFullName(a.getInstanceType(t))
                  : '[object Exception]'),
            e
          );
        },
      }),
      (E.wrap = function (e) {
        return a.isInstanceOfType(e, E)
          ? e
          : e instanceof TypeError
          ? new M(e.message, new O(e))
          : e instanceof RangeError
          ? new R(null, e.message, new O(e))
          : e instanceof Error
          ? new O(e)
          : new E(e.toString());
      });
    var A = function (e, t) {
      E.call(this, e || 'The method or operation is not implemented.', t);
    };
    (A.__typeName = 'ss.NotImplementedException'),
      (a.NotImplementedException = A),
      a.initClass(A, a, {}, E);
    var V = function (e, t) {
      E.call(this, e || 'Specified method is not supported.', t);
    };
    (V.__typeName = 'ss.NotSupportedException'),
      (a.NotSupportedException = V),
      a.initClass(V, a, {}, E);
    var k = function (e, t) {
      (this.innerExceptions = a.isValue(t) ? a.arrayFromEnumerable(t) : []),
        E.call(
          this,
          e || 'One or more errors occurred.',
          this.innerExceptions.length ? this.innerExceptions[0] : null,
        );
    };
    (k.__typeName = 'ss.AggregateException'),
      (a.AggregateException = k),
      a.initClass(
        k,
        a,
        {
          flatten: function () {
            for (var e = [], t = 0; t < this.innerExceptions.length; t++) {
              var i = this.innerExceptions[t];
              a.isInstanceOfType(i, k)
                ? e.push.apply(e, i.flatten().innerExceptions)
                : e.push(i);
            }
            return new k(this._message, e);
          },
        },
        E,
      );
    var T = function (e, t, i) {
      E.call(
        this,
        t || (e.length && e[0] ? e[0].toString() : 'An error occurred'),
        i,
      ),
        (this.arguments = a.arrayClone(e));
    };
    (T.__typeName = 'ss.PromiseException'),
      (a.PromiseException = T),
      a.initClass(
        T,
        a,
        {
          get_arguments: function () {
            return this._arguments;
          },
        },
        E,
      );
    var O = function (e, t, i) {
      E.call(this, t || e.message, i), (this.error = e);
    };
    (O.__typeName = 'ss.JsErrorException'),
      (a.JsErrorException = O),
      a.initClass(
        O,
        a,
        {
          get_stack: function () {
            return this.error.stack;
          },
        },
        E,
      );
    var F = function (e, t, i) {
      E.call(this, e || 'Value does not fall within the expected range.', i),
        (this.paramName = t || null);
    };
    (F.__typeName = 'ss.ArgumentException'),
      (a.ArgumentException = F),
      a.initClass(F, a, {}, E);
    var D = function (e, t, i) {
      t ||
        ((t = 'Value cannot be null.'), e && (t += '\nParameter name: ' + e)),
        F.call(this, t, e, i);
    };
    (D.__typeName = 'ss.ArgumentNullException'),
      (a.ArgumentNullException = D),
      a.initClass(D, a, {}, F);
    var R = function (e, t, i, n) {
      t ||
        ((t = 'Value is out of range.'), e && (t += '\nParameter name: ' + e)),
        F.call(this, t, e, i),
        (this.actualValue = n || null);
    };
    (R.__typeName = 'ss.ArgumentOutOfRangeException'),
      (a.ArgumentOutOfRangeException = R),
      a.initClass(R, a, {}, F);
    var z = function (e, t) {
      E.call(this, e || 'Invalid format.', t);
    };
    (z.__typeName = 'ss.FormatException'),
      (a.FormatException = z),
      a.initClass(z, a, {}, E);
    var P = function (e, t) {
      E.call(this, e || 'Division by 0.', t);
    };
    (P.__typeName = 'ss.DivideByZeroException'),
      (a.DivideByZeroException = P),
      a.initClass(P, a, {}, E);
    var x = function (e, t) {
      E.call(this, e || 'The cast is not valid.', t);
    };
    (x.__typeName = 'ss.InvalidCastException'),
      (a.InvalidCastException = x),
      a.initClass(x, a, {}, E);
    var U = function (e, t) {
      E.call(
        this,
        e || 'Operation is not valid due to the current state of the object.',
        t,
      );
    };
    (U.__typeName = 'ss.InvalidOperationException'),
      (a.InvalidOperationException = U),
      a.initClass(U, a, {}, E);
    var M = function (e, t) {
      E.call(this, e || 'Object is null.', t);
    };
    (M.__typeName = 'ss.NullReferenceException'),
      (a.NullReferenceException = M),
      a.initClass(M, a, {}, E);
    var L = function (e, t) {
      E.call(this, e || 'Key not found.', t);
    };
    (L.__typeName = 'ss.KeyNotFoundException'),
      (a.KeyNotFoundException = L),
      a.initClass(L, a, {}, E);
    var H = function (e, t) {
      E.call(this, e || 'Ambiguous match.', t);
    };
    (H.__typeName = 'ss.AmbiguousMatchException'),
      (a.AmbiguousMatchException = H),
      a.initClass(H, a, {}, E);
    var j = function (e, t) {
      (this._getEnumerator = e), (this._this = t);
    };
    (j.__typeName = 'ss.IteratorBlockEnumerable'),
      (a.IteratorBlockEnumerable = j),
      a.initClass(
        j,
        a,
        {
          getEnumerator: function () {
            return this._getEnumerator.call(this._this);
          },
        },
        null,
        [h],
      );
    var W = function (e, t, i, n) {
      (this._moveNext = e),
        (this._getCurrent = t),
        (this._dispose = i),
        (this._this = n);
    };
    (W.__typeName = 'ss.IteratorBlockEnumerator'),
      (a.IteratorBlockEnumerator = W),
      a.initClass(
        W,
        a,
        {
          moveNext: function () {
            try {
              return this._moveNext.call(this._this);
            } catch (e) {
              throw (this._dispose && this._dispose.call(this._this), e);
            }
          },
          current: function () {
            return this._getCurrent.call(this._this);
          },
          reset: function () {
            throw new V('Reset is not supported.');
          },
          dispose: function () {
            this._dispose && this._dispose.call(this._this);
          },
        },
        null,
        [c, I],
      );
    var q = function (e) {
      (this._valueFactory = e), (this.isValueCreated = !1);
    };
    (q.__typeName = 'ss.Lazy'),
      (a.Lazy = q),
      a.initClass(q, a, {
        value: function () {
          return (
            this.isValueCreated ||
              ((this._value = this._valueFactory()),
              delete this._valueFactory,
              (this.isValueCreated = !0)),
            this._value
          );
        },
      }),
      void 0 === e.HTMLElement && (e.HTMLElement = Element),
      void 0 === e.MessageEvent && (e.MessageEvent = Event),
      (Date.now =
        Date.now ||
        function () {
          return +new Date();
        }),
      (e.ss = a);
  })(e);
  var t = e.ss,
    i = e.HTMLElement,
    n = e.MessageEvent;
  /*! BEGIN CoreSlim */
  !(function () {
    var i = {};
    (e.tab = e.tab || {}), t.initAssembly(i, 'tabcoreslim');
    var n = function () {};
    (n.__typeName = 'tab.EscapingUtil'),
      (n.escapeHtml = function (e) {
        var i = t.coalesce(e, '');
        return (i = (i = (i = (i = (i = (i = i.replace(
          new RegExp('&', 'g'),
          '&amp;',
        )).replace(new RegExp('<', 'g'), '&lt;')).replace(
          new RegExp('>', 'g'),
          '&gt;',
        )).replace(new RegExp('"', 'g'), '&quot;')).replace(
          new RegExp("'", 'g'),
          '&#39;',
        )).replace(new RegExp('/', 'g'), '&#47;'));
      }),
      (e.tab.EscapingUtil = n);
    var r = function () {};
    (r.__typeName = 'tab.ScriptEx'), (e.tab.ScriptEx = r);
    var a = function (e) {
      (this.$window = null), (this.$window = e);
    };
    (a.__typeName = 'tab.WindowHelper'),
      (a.get_windowSelf = function () {
        return window.self;
      }),
      (a.get_selection = function () {
        return 'function' == typeof window.getSelection
          ? window.getSelection()
          : 'function' == typeof document.getSelection
          ? document.getSelection()
          : null;
      }),
      (a.close = function (e) {
        e.close();
      }),
      (a.getOpener = function (e) {
        return e.opener;
      }),
      (a.getLocation = function (e) {
        return e.location;
      }),
      (a.getPathAndSearch = function (e) {
        return e.location.pathname + e.location.search;
      }),
      (a.setLocationHref = function (e, t) {
        e.location.href = t;
      }),
      (a.locationReplace = function (e, t) {
        e.location.replace(t);
      }),
      (a.open = function (e, t, i) {
        return window.open(e, t, i);
      }),
      (a.reload = function (e, t) {
        e.location.reload(t);
      }),
      (a.requestAnimationFrame = function (e) {
        return a.$requestAnimationFrameFunc(e);
      }),
      (a.cancelAnimationFrame = function (e) {
        t.isValue(e) && a.$cancelAnimationFrameFunc(e);
      }),
      (a.setTimeout = function (e, t) {
        return window.setTimeout(e, t);
      }),
      (a.addListener = function (e, t, i) {
        'addEventListener' in e
          ? e.addEventListener(t, i, !1)
          : e.attachEvent('on' + t, i);
      }),
      (a.removeListener = function (e, t, i) {
        'removeEventListener' in e
          ? e.removeEventListener(t, i, !1)
          : e.detachEvent('on' + t, i);
      }),
      (a.$setDefaultRequestAnimationFrameImpl = function () {
        var e = 0;
        a.$requestAnimationFrameFunc = function (t) {
          var i = new Date().getTime(),
            n = Math.max(0, 16 - (i - e));
          return (e = i + n), window.setTimeout(t, n);
        };
      }),
      (a.clearSelection = function () {
        var e = a.get_selection();
        t.isValue(e) &&
          ('function' == typeof e.removeAllRanges
            ? e.removeAllRanges()
            : 'function' == typeof e.empty && e.empty());
      }),
      (e.tab.WindowHelper = a),
      t.initClass(n, i, {}),
      t.initClass(r, i, {}),
      t.initClass(a, i, {
        get_pageXOffset: function () {
          return a.$pageXOffsetFunc(this.$window);
        },
        get_pageYOffset: function () {
          return a.$pageYOffsetFunc(this.$window);
        },
        get_clientWidth: function () {
          return a.$clientWidthFunc(this.$window);
        },
        get_clientHeight: function () {
          return a.$clientHeightFunc(this.$window);
        },
        get_innerWidth: function () {
          return a.$innerWidthFunc(this.$window);
        },
        get_outerWidth: function () {
          return a.$outerWidthFunc(this.$window);
        },
        get_innerHeight: function () {
          return a.$innerHeightFunc(this.$window);
        },
        get_outerHeight: function () {
          return a.$outerHeightFunc(this.$window);
        },
        get_screenLeft: function () {
          return a.$screenLeftFunc(this.$window);
        },
        get_screenTop: function () {
          return a.$screenTopFunc(this.$window);
        },
        isQuirksMode: function () {
          return 'BackCompat' === document.compatMode;
        },
      }),
      (function () {
        (a.$innerWidthFunc = null),
          (a.$innerHeightFunc = null),
          (a.$clientWidthFunc = null),
          (a.$clientHeightFunc = null),
          (a.$pageXOffsetFunc = null),
          (a.$pageYOffsetFunc = null),
          (a.$screenLeftFunc = null),
          (a.$screenTopFunc = null),
          (a.$outerWidthFunc = null),
          (a.$outerHeightFunc = null),
          (a.$requestAnimationFrameFunc = null),
          (a.$cancelAnimationFrameFunc = null),
          (a.$innerWidthFunc =
            'innerWidth' in window
              ? function (e) {
                  return e.innerWidth;
                }
              : function (e) {
                  return e.document.documentElement.offsetWidth;
                }),
          (a.$outerWidthFunc =
            'outerWidth' in window
              ? function (e) {
                  return e.outerWidth;
                }
              : a.$innerWidthFunc),
          (a.$innerHeightFunc =
            'innerHeight' in window
              ? function (e) {
                  return e.innerHeight;
                }
              : function (e) {
                  return e.document.documentElement.offsetHeight;
                }),
          (a.$outerHeightFunc =
            'outerHeight' in window
              ? function (e) {
                  return e.outerHeight;
                }
              : a.$innerHeightFunc),
          (a.$clientWidthFunc =
            'clientWidth' in window
              ? function (e) {
                  return e.clientWidth;
                }
              : function (e) {
                  return e.document.documentElement.clientWidth;
                }),
          (a.$clientHeightFunc =
            'clientHeight' in window
              ? function (e) {
                  return e.clientHeight;
                }
              : function (e) {
                  return e.document.documentElement.clientHeight;
                }),
          (a.$pageXOffsetFunc = t.isValue(window.self.pageXOffset)
            ? function (e) {
                return e.pageXOffset;
              }
            : function (e) {
                return e.document.documentElement.scrollLeft;
              }),
          (a.$pageYOffsetFunc = t.isValue(window.self.pageYOffset)
            ? function (e) {
                return e.pageYOffset;
              }
            : function (e) {
                return e.document.documentElement.scrollTop;
              }),
          (a.$screenLeftFunc =
            'screenLeft' in window
              ? function (e) {
                  return t.unbox(t.cast(e.screenLeft, t.Int32));
                }
              : function (e) {
                  return e.screenX;
                }),
          (a.$screenTopFunc =
            'screenTop' in window
              ? function (e) {
                  return t.unbox(t.cast(e.screenTop, t.Int32));
                }
              : function (e) {
                  return e.screenY;
                });
        var e = 'requestAnimationFrame',
          i = 'cancelAnimationFrame',
          n = ['ms', 'moz', 'webkit', 'o'],
          r = null,
          s = null;
        e in window && (r = e), i in window && (s = i);
        for (
          var o = 0;
          o < n.length && (t.isNullOrUndefined(r) || t.isNullOrUndefined(s));
          ++o
        ) {
          var l = n[o],
            u = l + 'RequestAnimationFrame';
          t.isNullOrUndefined(r) && u in window && (r = u),
            t.isNullOrUndefined(s) &&
              ((u = l + 'CancelAnimationFrame') in window && (s = u),
              (u = l + 'CancelRequestAnimationFrame') in window && (s = u));
        }
        t.isValue(r)
          ? (a.$requestAnimationFrameFunc = function (e) {
              return window[r](e);
            })
          : a.$setDefaultRequestAnimationFrameImpl(),
          (a.$cancelAnimationFrameFunc = t.isValue(s)
            ? function (e) {
                window[s](e);
              }
            : function (e) {
                window.clearTimeout(e);
              });
      })();
  })();
  var r = e.tab;
  /*! API */ !(function () {
    var a = {};
    (e.tab = e.tab || {}),
      (e.tableauSoftware = e.tableauSoftware || {}),
      t.initAssembly(a, 'Tableau.JavaScript.Vql.Api');
    var s = function () {
      if (
        ((this.$nextHandlerId = 0),
        (this.$handlers = {}),
        (this.$commandCallbacks = {}),
        (this.$customViewLoadCallbacks = {}),
        (this.$commandReturnAfterStateReadyQueues = {}),
        M.hasWindowAddEventListener())
      )
        window.addEventListener(
          'message',
          t.mkdel(this, this.$handleCrossDomainMessage),
          !1,
        );
      else if (M.hasDocumentAttachEvent()) {
        var e = t.mkdel(this, this.$handleCrossDomainMessage);
        document.attachEvent('onmessage', e),
          window.attachEvent('onmessage', e);
      } else window.onmessage = t.mkdel(this, this.$handleCrossDomainMessage);
      this.$nextHandlerId = 0;
    };
    s.__typeName = 'tab.$CrossDomainMessageRouter';
    var o = function (e, t) {
      (this.$customViewImpl = null),
        pe.call(this, e, null),
        (this.$customViewImpl = t);
    };
    o.__typeName = 'tab.$CustomViewEventContext';
    var l = function () {};
    l.__typeName = 'tab.$DashboardZoneInfo';
    var u = function () {};
    (u.__typeName = 'tab.$DeferredUtil'),
      (u.$coerceToTrustedPromise = function (e) {
        var i;
        if (e instanceof tableauSoftware.Promise) i = t.cast(e, O);
        else if (
          (t.isValue(e) && 'function' == typeof e.valueOf && (e = e.valueOf()),
          u.$isPromise(e))
        ) {
          var n = new V();
          t.cast(e, O).then(t.mkdel(n, n.resolve), t.mkdel(n, n.reject)),
            (i = n.get_promise());
        } else i = u.$resolved(e);
        return i;
      }),
      (u.$reject = function (e) {
        return u.$coerceToTrustedPromise(e).then(function (e) {
          return u.$rejected(t.cast(e, t.Exception));
        }, null);
      }),
      (u.$resolved = function (e) {
        return new O(function (i, n) {
          try {
            return u.$coerceToTrustedPromise(t.isValue(i) ? i(e) : e);
          } catch (e) {
            var r = t.Exception.wrap(e);
            return u.$rejected(r);
          }
        });
      }),
      (u.$rejected = function (e) {
        return new O(function (i, n) {
          try {
            return t.isValue(n)
              ? u.$coerceToTrustedPromise(n(e))
              : u.$rejected(e);
          } catch (e) {
            var r = t.Exception.wrap(e);
            return u.$rejected(r);
          }
        });
      }),
      (u.$isPromise = function (e) {
        return t.isValue(e) && 'function' == typeof e.then;
      });
    var c = function () {
      (this.$hostId = null),
        (this.$1$CustomViewsListLoadField = null),
        (this.$1$StateReadyForQueryField = null);
    };
    c.__typeName = 'tab.$DoNothingCrossDomainHandler';
    var h = function (e, t, i, n) {
      (this.$fieldFieldName = null),
        (this.$filterCaption = null),
        pe.call(this, e, t),
        (this.$fieldFieldName = i),
        (this.$filterCaption = n);
    };
    h.__typeName = 'tab.$FilterEventContext';
    var m = function (e, t) {
      pe.call(this, e, t);
    };
    m.__typeName = 'tab.$HighlightEventContext';
    var d = function (e) {
      if (
        ((this.$clonedPairs = null),
        (this.$collection = new r._Collection()),
        (this.$tupleId = 0),
        k.isArray(e))
      )
        for (var i = e, n = 0; n < i.length; n++) {
          var a = i[n];
          if (!t.isValue(a.fieldName))
            throw U.createInvalidParameter('pair.fieldName');
          if (!t.isValue(a.value)) throw U.createInvalidParameter('pair.value');
          var s = new qe(a.fieldName, a.value);
          this.$collection._add(s.fieldName, s);
        }
      else this.$tupleId = e;
    };
    (d.__typeName = 'tab.$MarkImpl'),
      (d.$processActiveMarks = function (e) {
        var i = new r._Collection();
        if (t.isNullOrUndefined(e) || M.isNullOrEmpty(e.marks)) return i;
        for (var n = 0; n < e.marks.length; n++) {
          var a = e.marks[n],
            s = a.tupleId,
            o = new We(s);
          i._add(s.toString(), o);
          for (var l = 0; l < a.pairs.length; l++) {
            var u = a.pairs[l],
              c = M.convertRawValue(u.value, u.valueDataType),
              h = new qe(u.fieldName, c);
            (h.formattedValue = u.formattedValue),
              o.$impl.get_$pairs()._has(h.fieldName) || o.$impl.$addPair(h);
          }
        }
        return i;
      });
    var p = function (e, t) {
      pe.call(this, e, t);
    };
    p.__typeName = 'tab.$MarksEventContext';
    var f = function (e, t) {
      (this.$parameterName = null),
        pe.call(this, e, null),
        (this.$parameterName = t);
    };
    f.__typeName = 'tab.$ParameterEventContext';
    var g = function (e) {
      if (
        ((this.$parameter = null),
        (this.$name = null),
        (this.$currentValue = null),
        (this.$dataType = null),
        (this.$allowableValuesType = null),
        (this.$allowableValues = null),
        (this.$minValue = null),
        (this.$maxValue = null),
        (this.$stepSize = null),
        (this.$dateStepPeriod = null),
        (this.$name = e.name),
        (this.$currentValue = M.getDataValue(e.currentValue)),
        (this.$dataType = B.convertParameterDataType(e.dataType)),
        (this.$allowableValuesType = B.convertParameterAllowableValuesType(
          e.allowableValuesType,
        )),
        t.isValue(e.allowableValues) && 'list' === this.$allowableValuesType)
      ) {
        this.$allowableValues = [];
        for (var i = 0; i < e.allowableValues.length; i++) {
          var n = e.allowableValues[i];
          this.$allowableValues.push(M.getDataValue(n));
        }
      }
      'range' === this.$allowableValuesType &&
        ((this.$minValue = M.getDataValue(e.minValue)),
        (this.$maxValue = M.getDataValue(e.maxValue)),
        (this.$stepSize = e.stepSize),
        ('date' === this.$dataType || 'datetime' === this.$dataType) &&
          t.isValue(this.$stepSize) &&
          t.isValue(e.dateStepPeriod) &&
          (this.$dateStepPeriod = B.convertPeriodType(e.dateStepPeriod)));
    };
    g.__typeName = 'tab.$ParameterImpl';
    var $ = function () {};
    ($.__typeName = 'tab.$PublicEnums'),
      ($.$tryNormalizeEnum = function (e) {
        return function (i, n) {
          if (t.isValue(i))
            for (
              var r = i.toString().toUpperCase(),
                a = t.Enum.getValues(e),
                s = 0;
              s < a.length;
              s++
            ) {
              var o = a[s],
                l = o.toUpperCase();
              if (t.referenceEquals(r, l)) return (n.$ = o), !0;
            }
          return (n.$ = t.getDefaultValue(e)), !1;
        };
      }),
      ($.$normalizeEnum = function (e) {
        return function (t, i) {
          var n = {};
          if (!$.$tryNormalizeEnum(e).call(null, t, n))
            throw U.createInvalidParameter(i);
          return n.$;
        };
      }),
      ($.$isValidEnum = function (e) {
        return function (t) {
          return $.$tryNormalizeEnum(e).call(null, t, {});
        };
      });
    var _ = function () {};
    (_.__typeName = 'tab._ApiBootstrap'),
      (_.initialize = function () {
        y.registerCrossDomainMessageRouter(function () {
          return new s();
        });
      }),
      (e.tab._ApiBootstrap = _);
    var v = function (e, t, i, n) {
      (this.$1$NameField = null),
        (this.$1$HostIdField = null),
        (this.$1$CommandIdField = null),
        (this.$1$ParametersField = null),
        this.set_name(e),
        this.set_commandId(t),
        this.set_hostId(i),
        this.set_parameters(n);
    };
    (v.__typeName = 'tab._ApiCommand'),
      (v.generateNextCommandId = function () {
        var e = 'cmd' + v.$nextCommandId;
        return v.$nextCommandId++, e;
      }),
      (v.parse = function (e) {
        var i,
          n,
          r = e.indexOf(String.fromCharCode(44));
        if (r < 0) return (i = t.cast(e, String)), new v(i, null, null, null);
        i = t.cast(e.substr(0, r), String);
        var a,
          s = e.substr(r + 1);
        if ((r = s.indexOf(String.fromCharCode(44))) < 0)
          return new v(i, (n = s), null, null);
        n = s.substr(0, r);
        var o = s.substr(r + 1);
        if ((r = o.indexOf(String.fromCharCode(44))) < 0)
          return new v(i, n, (a = o), null);
        a = o.substr(0, r);
        var l = o.substr(r + 1);
        return (
          (v.lastResponseMessage = e),
          'api.GetClientInfoCommand' === i &&
            (v.lastClientInfoResponseMessage = e),
          new v(i, n, a, l)
        );
      }),
      (e.tab._ApiCommand = v);
    var y = function () {};
    (y.__typeName = 'tab._ApiObjectRegistry'),
      (y.registerCrossDomainMessageRouter = function (e) {
        return y.$registerType(ve).call(null, e);
      }),
      (y.getCrossDomainMessageRouter = function () {
        return y.$getSingleton(ve).call(null);
      }),
      (y.disposeCrossDomainMessageRouter = function () {
        y.$clearSingletonInstance(ve).call(null);
      }),
      (y.$registerType = function (e) {
        return function (i) {
          t.isNullOrUndefined(y.$creationRegistry) &&
            (y.$creationRegistry = {});
          var n = t.getTypeFullName(e),
            r = y.$creationRegistry[n];
          return (y.$creationRegistry[n] = i), r;
        };
      }),
      (y.$createType = function (e) {
        return function () {
          if (t.isNullOrUndefined(y.$creationRegistry))
            throw U.createInternalError('No types registered');
          var i = t.getTypeFullName(e),
            n = y.$creationRegistry[i];
          if (t.isNullOrUndefined(n))
            throw U.createInternalError(
              "No creation function has been registered for interface type '" +
                i +
                "'.",
            );
          return n();
        };
      }),
      (y.$getSingleton = function (e) {
        return function () {
          t.isNullOrUndefined(y.$singletonInstanceRegistry) &&
            (y.$singletonInstanceRegistry = {});
          var i = t.getTypeFullName(e),
            n = t.cast(y.$singletonInstanceRegistry[i], e);
          return (
            t.isNullOrUndefined(n) &&
              ((n = y.$createType(e).call(null)),
              (y.$singletonInstanceRegistry[i] = n)),
            n
          );
        };
      }),
      (y.$clearSingletonInstance = function (e) {
        return function () {
          if (t.isNullOrUndefined(y.$singletonInstanceRegistry)) return null;
          var i = t.getTypeFullName(e),
            n = t.cast(y.$singletonInstanceRegistry[i], e);
          return delete y.$singletonInstanceRegistry[i], n;
        };
      }),
      (e.tab._ApiObjectRegistry = y);
    var w = function (e, t, i) {
      (this.$workbookName = null),
        (this.$worksheetName = null),
        (this.$data = null),
        (this.$workbookName = e),
        (this.$worksheetName = t),
        (this.$data = i);
    };
    (w.__typeName = 'tab._ApiServerNotification'),
      (w.deserialize = function (e) {
        var i = JSON.parse(e),
          n = t.cast(i['api.workbookName'], String),
          r = t.cast(i['api.worksheetName'], String),
          a = i['api.commandData'];
        return new w(n, r, a);
      }),
      (e.tab._ApiServerNotification = w);
    var S = function (e) {
      (this.$commandResult = null), (this.$commandData = null);
      var i = JSON.parse(e);
      (this.$commandResult = t.cast(i['api.commandResult'], String)),
        (this.$commandData = i['api.commandData']);
    };
    (S.__typeName = 'tab._ApiServerResultParser'),
      (e.tab._ApiServerResultParser = S);
    var b = function () {
      (this.$items = []), (this.$itemMap = {});
    };
    (b.__typeName = 'tab._CollectionImpl'), (e.tab._CollectionImpl = b);
    var I = function (e, i, n, r) {
      (this.$fieldName = null),
        (this.$dataType = null),
        (this.$isReferenced = !1),
        (this.$index = 0),
        T.verifyString(e, 'Column Field Name'),
        (this.$fieldName = e),
        (this.$dataType = i),
        (this.$isReferenced = t.coalesce(n, !1)),
        (this.$index = r);
    };
    (I.__typeName = 'tab._ColumnImpl'), (e.tab._ColumnImpl = I);
    var C = function (e, t, i) {
      (this.$customView = null),
        (this.$presModel = null),
        (this.$workbookImpl = null),
        (this.$messagingOptions = null),
        (this.$name = null),
        (this.$ownerName = null),
        (this.$url = null),
        (this.$isPublic = !1),
        (this.$isDefault = !1),
        (this.$isStale = !1),
        (this.$workbookImpl = e),
        (this.$name = t),
        (this.$messagingOptions = i),
        (this.$isPublic = !1),
        (this.$isDefault = !1),
        (this.$isStale = !1);
    };
    (C.__typeName = 'tab._CustomViewImpl'),
      (C._getAsync = function (e) {
        var t = new r._Deferred();
        return (
          t.resolve(e.get__customViewImpl().get_$customView()), t.get_promise()
        );
      }),
      (C._createNew = function (e, i, n, r) {
        var a = new C(e, n.name, i);
        return (
          (a.$isPublic = n.isPublic),
          (a.$url = n.url),
          (a.$ownerName = n.owner.friendlyName),
          (a.$isDefault = t.isValue(r) && t.unbox(r) === n.id),
          (a.$presModel = n),
          a
        );
      }),
      (C._saveNewAsync = function (e, i, n) {
        var a = new r._Deferred(),
          s = {};
        s['api.customViewName'] = n;
        var o = C.$createCustomViewCommandReturnHandler(
          'api.SaveNewCustomViewCommand',
          a,
          function (n) {
            C._processCustomViewUpdate(e, i, n, !0);
            var r = null;
            t.isValue(e.get_$updatedCustomViews()) &&
              (r = e.get_$updatedCustomViews().get_item(0)),
              a.resolve(r);
          },
        );
        return i.sendCommand(Object).call(i, s, o), a.get_promise();
      }),
      (C._showCustomViewAsync = function (e, i, n) {
        var a = new r._Deferred(),
          s = {};
        t.isValue(n) && (s['api.customViewParam'] = n);
        var o = C.$createCustomViewCommandReturnHandler(
          'api.ShowCustomViewCommand',
          a,
          function (t) {
            var i = e.get_activeCustomView();
            a.resolve(i);
          },
        );
        return i.sendCommand(Object).call(i, s, o), a.get_promise();
      }),
      (C._makeCurrentCustomViewDefaultAsync = function (e, t) {
        var i = new r._Deferred(),
          n = C.$createCustomViewCommandReturnHandler(
            'api.MakeCurrentCustomViewDefaultCommand',
            i,
            function (t) {
              var n = e.get_activeCustomView();
              i.resolve(n);
            },
          );
        return t.sendCommand(Object).call(t, {}, n), i.get_promise();
      }),
      (C._getCustomViewsAsync = function (e, i) {
        var n = new r._Deferred(),
          a = new (t.makeGenericType(ue, [Object]))(
            'api.FetchCustomViewsCommand',
            0,
            function (t) {
              C._processCustomViews(e, i, t),
                n.resolve(e.get_$customViews()._toApiCollection());
            },
            function (e, t) {
              n.reject(U.create('serverError', t));
            },
          );
        return i.sendCommand(Object).call(i, null, a), n.get_promise();
      }),
      (C._processCustomViews = function (e, t, i) {
        C._processCustomViewUpdate(e, t, i, !1);
      }),
      (C._processCustomViewUpdate = function (e, i, n, a) {
        a && e.set_$updatedCustomViews(new r._Collection()),
          e.set_$currentCustomView(null);
        var s = null;
        t.isValue(n.currentView) && (s = n.currentView.name);
        var o = n.defaultCustomViewId;
        if (a && t.isValue(n.newView)) {
          var l = C._createNew(e, i, n.newView, o);
          e.get_$updatedCustomViews()._add(l.get_$name(), l.get_$customView());
        }
        if (
          (e.set_$removedCustomViews(e.get_$customViews()),
          e.set_$customViews(new r._Collection()),
          t.isValue(n.customViews))
        ) {
          var u = n.customViews;
          if (u.length > 0)
            for (var c = 0; c < u.length; c++) {
              var h = C._createNew(e, i, u[c], o);
              e.get_$customViews()._add(h.get_$name(), h.get_$customView()),
                e.get_$removedCustomViews()._has(h.get_$name())
                  ? e.get_$removedCustomViews()._remove(h.get_$name())
                  : a &&
                    (e.get_$updatedCustomViews()._has(h.get_$name()) ||
                      e
                        .get_$updatedCustomViews()
                        ._add(h.get_$name(), h.get_$customView())),
                t.isValue(s) &&
                  t.referenceEquals(h.get_$name(), s) &&
                  e.set_$currentCustomView(h.get_$customView());
            }
        }
      }),
      (C.$createCustomViewCommandReturnHandler = function (e, i, n) {
        return new (t.makeGenericType(ue, [Object]))(e, 0, n, function (e, t) {
          i.reject(U.create('serverError', t));
        });
      });
    var N = function (e, t, i) {
      (this.$dashboard = null),
        (this.$worksheets = new r._Collection()),
        (this.$dashboardObjects = new r._Collection()),
        D.call(this, e, t, i);
    };
    (N.__typeName = 'tab._DashboardImpl'), (e.tab._DashboardImpl = N);
    var E = function (e, t) {
      (this.$name = null),
        (this.$fields = new r._Collection()),
        (this.$isPrimary = !1),
        (this.$dataSource = null),
        T.verifyString(e, 'name'),
        (this.$name = e),
        (this.$isPrimary = t);
    };
    (E.__typeName = 'tab._DataSourceImpl'),
      (E.processDataSource = function (e) {
        for (
          var i = new E(e.name, e.isPrimary),
            n = t.coalesce(e.fields, []),
            r = 0;
          r < n.length;
          r++
        ) {
          var a = n[r],
            s = B.convertFieldRole(a.role),
            o = B.convertFieldAggregation(a.aggregation),
            l = new Le(i.get_dataSource(), a.name, s, o);
          i.addField(l);
        }
        return i;
      }),
      (E.processDataSourcesForWorksheet = function (e) {
        for (
          var i = new r._Collection(), n = null, a = 0;
          a < e.dataSources.length;
          a++
        ) {
          var s = e.dataSources[a],
            o = E.processDataSource(s);
          s.isPrimary ? (n = o) : i._add(s.name, o.get_dataSource());
        }
        return (
          t.isValue(n) && i._addToFirst(n.get_name(), n.get_dataSource()), i
        );
      }),
      (e.tab._DataSourceImpl = E);
    var A = function (e, t, i, n) {
      (this.$name = null),
        (this.$rows = null),
        (this.$totalRowCount = 0),
        (this.$columns = null),
        (this.$isSummaryData = !1),
        (this.$rows = e),
        (this.$totalRowCount = i),
        (this.$columns = n),
        (this.$isSummaryData = t),
        (this.$name = t ? 'Summary Data Table' : 'Underlying Data Table');
    };
    (A.__typeName = 'tab._DataTableImpl'),
      (A.processGetDataPresModel = function (e) {
        var t = A.$processUnderlyingTable(e.dataTable),
          i = A.$processUnderlyingColumns(e.headers),
          n = new A(t, e.isSummary, t.length, i);
        return new Me(n);
      }),
      (A.$processUnderlyingTable = function (e) {
        for (var t = [], i = 0; i < e.length; i++) {
          for (var n = e[i], r = [], a = 0; a < n.length; a++) {
            var s = n[a];
            r.push(M.getDataValue(s));
          }
          t.push(r);
        }
        return t;
      }),
      (A.$processUnderlyingColumns = function (e) {
        for (var t = [], i = 0; i < e.length; i++) {
          var n = e[i],
            r = new I(
              n.fieldName,
              B.convertDataType(n.dataType),
              n.isReferenced,
              n.index,
            );
          t.push(new Re(r));
        }
        return t;
      }),
      (e.tab._DataTableImpl = A);
    var V = function () {
      (this.$promise = null),
        (this.$thenFunc = null),
        (this.$listeners = []),
        (this.$resolveFunc = null),
        (this.$promise = new O(t.mkdel(this, this.then))),
        (this.$thenFunc = t.mkdel(this, this.$preResolutionThen)),
        (this.$resolveFunc = t.mkdel(this, this.$transitionToFulfilled));
    };
    (V.__typeName = 'tab._DeferredImpl'), (e.tab._DeferredImpl = V);
    var k = function () {};
    (k.__typeName = 'tab._jQueryShim'),
      (k.isFunction = function (e) {
        return t.referenceEquals(k.type(e), k.$functionType);
      }),
      (k.isArray = function (e) {
        return t.isValue(Array.isArray)
          ? t.unbox(t.cast(Array.isArray(e), Boolean))
          : t.referenceEquals(k.type(e), k.$arrayType);
      }),
      (k.type = function (e) {
        return t.isNullOrUndefined(e)
          ? String(e)
          : k.$class2type[t.cast(k.$toString.call(e), String)] || k.$objectType;
      }),
      (k.trim = function (e) {
        return t.isValue(k.$trim)
          ? t.isNullOrUndefined(e)
            ? ''
            : t.cast(k.$trim.call(e), String)
          : t.isNullOrUndefined(e)
          ? ''
          : e.toString().replace(k.$trimLeft, '').replace(k.$trimRight, '');
      }),
      (k.parseJSON = function (e) {
        if ('string' != typeof e || t.isNullOrUndefined(e)) return null;
        if (((e = k.trim(e)), t.isValue(JSON) && t.isValue(JSON.parse)))
          return JSON.parse(e);
        if (
          k.$rvalidchars.test(
            e
              .replace(k.$rvalidescape, '@')
              .replace(k.$rvalidtokens, ']')
              .replace(k.$rvalidbraces, ''),
          )
        )
          return new Function('return ' + e)();
        throw new t.Exception('Invalid JSON: ' + e);
      }),
      (e.tab._jQueryShim = k);
    var T = function () {};
    (T.__typeName = 'tab._Param'),
      (T.verifyString = function (e, i) {
        if (t.isNullOrUndefined(e) || 0 === e.length)
          throw U.createInternalStringArgumentException(i);
      }),
      (T.verifyValue = function (e, i) {
        if (t.isNullOrUndefined(e))
          throw U.createInternalNullArgumentException(i);
      }),
      (e.tab._Param = T);
    var O = function (e) {
      (this.then = null), (this.then = e);
    };
    (O.__typeName = 'tab._PromiseImpl'), (e.tab._PromiseImpl = O);
    var F = function (e, t, i, n) {
      (this.left = 0),
        (this.top = 0),
        (this.width = 0),
        (this.height = 0),
        (this.left = e),
        (this.top = t),
        (this.width = i),
        (this.height = n);
    };
    (F.__typeName = 'tab._Rect'), (e.tab._Rect = F);
    var D = function (e, t, i) {
      (this.$name = null),
        (this.$index = 0),
        (this.$isActive = !1),
        (this.$isHidden = !1),
        (this.$sheetType = null),
        (this.$size = null),
        (this.$url = null),
        (this.$workbookImpl = null),
        (this.$messagingOptions = null),
        (this.$parentStoryPointImpl = null),
        (this.$zoneId = 0),
        T.verifyValue(e, 'sheetInfoImpl'),
        T.verifyValue(t, 'workbookImpl'),
        T.verifyValue(i, 'messagingOptions'),
        (this.$name = e.name),
        (this.$index = e.index),
        (this.$isActive = e.isActive),
        (this.$isHidden = e.isHidden),
        (this.$sheetType = e.sheetType),
        (this.$size = e.size),
        (this.$url = e.url),
        (this.$workbookImpl = t),
        (this.$messagingOptions = i),
        (this.$zoneId = e.zoneId);
    };
    (D.__typeName = 'tab._SheetImpl'),
      (D.$convertValueToIntIfValid = function (e) {
        return t.isValue(e) ? M.toInt(e) : e;
      }),
      (D.$normalizeSheetSize = function (e) {
        var i = $.$normalizeEnum(ae).call(null, e.behavior, 'size.behavior'),
          n = e.minSize;
        t.isValue(n) &&
          (n = Ce.$ctor(
            D.$convertValueToIntIfValid(e.minSize.width),
            D.$convertValueToIntIfValid(e.minSize.height),
          ));
        var r = e.maxSize;
        return (
          t.isValue(r) &&
            (r = Ce.$ctor(
              D.$convertValueToIntIfValid(e.maxSize.width),
              D.$convertValueToIntIfValid(e.maxSize.height),
            )),
          be.$ctor(i, n, r)
        );
      }),
      (e.tab._SheetImpl = D);
    var R = function () {};
    (R.__typeName = 'tab._SheetInfoImpl'),
      (R.$ctor = function (e, t, i, n, r, a, s, o, l) {
        var u = new Object();
        return (
          (u.name = null),
          (u.index = 0),
          (u.workbook = null),
          (u.url = null),
          (u.isHidden = !1),
          (u.sheetType = null),
          (u.zoneId = 0),
          (u.size = null),
          (u.isActive = !1),
          (u.name = e),
          (u.sheetType = t),
          (u.index = i),
          (u.size = n),
          (u.workbook = r),
          (u.url = a),
          (u.isActive = s),
          (u.isHidden = o),
          (u.zoneId = l),
          u
        );
      }),
      (e.tab._SheetInfoImpl = R);
    var z = function (e, t, i, n, r) {
      (this.$activeStoryPointImpl = null),
        (this.$findSheetFunc = null),
        (this.$story = null),
        (this.$storyPointsInfo = null),
        (this.$2$ActiveStoryPointChangeField = null),
        D.call(this, e, t, i),
        T.verifyValue(n, 'storyPm'),
        T.verifyValue(r, 'findSheetFunc'),
        (this.$findSheetFunc = r),
        this.update(n);
    };
    (z.__typeName = 'tab._StoryImpl'), (e.tab._StoryImpl = z);
    var P = function (e, i) {
      if (
        ((this.$caption = null),
        (this.$index = 0),
        (this.$isActive = !1),
        (this.$isUpdated = !1),
        (this.$containedSheetImpl = null),
        (this.$parentStoryImpl = null),
        (this.$storyPoint = null),
        (this.$storyPointId = 0),
        (this.$isActive = e.isActive),
        (this.$isUpdated = e.isUpdated),
        (this.$caption = e.caption),
        (this.$index = e.index),
        (this.$parentStoryImpl = e.parentStoryImpl),
        (this.$storyPointId = e.storyPointId),
        (this.$containedSheetImpl = i),
        t.isValue(i) &&
          (this.$containedSheetImpl.set_parentStoryPointImpl(this),
          'dashboard' === i.get_sheetType()))
      )
        for (
          var n = t.cast(this.$containedSheetImpl, N), r = 0;
          r < n.get_worksheets().get__length();
          r++
        ) {
          n.get_worksheets().get_item(r)._impl.set_parentStoryPointImpl(this);
        }
    };
    (P.__typeName = 'tab._StoryPointImpl'),
      (P.createContainedSheet = function (e, i, n, r) {
        var a = B.convertSheetType(e.sheetType),
          s = Ie.createAutomatic(),
          o = r(e.name),
          l = t.isNullOrUndefined(o),
          u = l ? '' : o.getUrl(),
          c = R.$ctor(e.name, a, -1, s, i.get_workbook(), u, !1, l, e.zoneId);
        if ('worksheet' === e.sheetType) {
          return new W(c, i, n, null);
        }
        if ('dashboard' === e.sheetType) {
          var h = new N(c, i, n),
            m = j.$createDashboardZones(e.dashboardZones);
          return h.$addObjects(m, r), h;
        }
        throw 'story' === e.sheetType
          ? U.createInternalError(
              'Cannot have a story embedded within another story.',
            )
          : U.createInternalError("Unknown sheet type '" + e.sheetType + "'");
      }),
      (e.tab._StoryPointImpl = P);
    var x = function () {};
    (x.__typeName = 'tab._StoryPointInfoImpl'),
      (x.$ctor = function (e, t, i, n, r, a) {
        var s = new Object();
        return (
          (s.storyPointId = 0),
          (s.parentStoryImpl = null),
          (s.caption = null),
          (s.index = 0),
          (s.isActive = !1),
          (s.isUpdated = !1),
          (s.caption = e),
          (s.index = t),
          (s.storyPointId = i),
          (s.isActive = n),
          (s.isUpdated = r),
          (s.parentStoryImpl = a),
          s
        );
      }),
      (e.tab._StoryPointInfoImpl = x);
    var U = function () {};
    (U.__typeName = 'tab._TableauException'),
      (U.create = function (e, i) {
        var n = new t.Exception(i);
        return (n.tableauSoftwareErrorCode = e), n;
      }),
      (U.createInternalError = function (e) {
        return t.isValue(e)
          ? U.create(
              'internalError',
              'Internal error. Please contact Tableau support with the following information: ' +
                e,
            )
          : U.create(
              'internalError',
              'Internal error. Please contact Tableau support',
            );
      }),
      (U.createInternalNullArgumentException = function (e) {
        return U.createInternalError("Null/undefined argument '" + e + "'.");
      }),
      (U.createInternalStringArgumentException = function (e) {
        return U.createInternalError("Invalid string argument '" + e + "'.");
      }),
      (U.createServerError = function (e) {
        return U.create('serverError', e);
      }),
      (U.createNotActiveSheet = function () {
        return U.create(
          'notActiveSheet',
          'Operation not allowed on non-active sheet',
        );
      }),
      (U.createInvalidCustomViewName = function (e) {
        return U.create(
          'invalidCustomViewName',
          'Invalid custom view name: ' + e,
        );
      }),
      (U.createInvalidParameter = function (e) {
        return U.create('invalidParameter', 'Invalid parameter: ' + e);
      }),
      (U.createInvalidFilterFieldNameOrValue = function (e) {
        return U.create(
          'invalidFilterFieldNameOrValue',
          'Invalid filter field name or value: ' + e,
        );
      }),
      (U.createInvalidDateParameter = function (e) {
        return U.create('invalidDateParameter', 'Invalid date parameter: ' + e);
      }),
      (U.createNullOrEmptyParameter = function (e) {
        return U.create(
          'nullOrEmptyParameter',
          'Parameter cannot be null or empty: ' + e,
        );
      }),
      (U.createMissingMaxSize = function () {
        return U.create(
          'missingMaxSize',
          'Missing maxSize for SheetSizeBehavior.ATMOST',
        );
      }),
      (U.createMissingMinSize = function () {
        return U.create(
          'missingMinSize',
          'Missing minSize for SheetSizeBehavior.ATLEAST',
        );
      }),
      (U.createMissingMinMaxSize = function () {
        return U.create(
          'missingMinMaxSize',
          'Missing minSize or maxSize for SheetSizeBehavior.RANGE',
        );
      }),
      (U.createInvalidRangeSize = function () {
        return U.create(
          'invalidSize',
          'Missing minSize or maxSize for SheetSizeBehavior.RANGE',
        );
      }),
      (U.createInvalidSizeValue = function () {
        return U.create('invalidSize', 'Size value cannot be less than zero');
      }),
      (U.createInvalidSheetSizeParam = function () {
        return U.create('invalidSize', 'Invalid sheet size parameter');
      }),
      (U.createSizeConflictForExactly = function () {
        return U.create(
          'invalidSize',
          'Conflicting size values for SheetSizeBehavior.EXACTLY',
        );
      }),
      (U.createInvalidSizeBehaviorOnWorksheet = function () {
        return U.create(
          'invalidSizeBehaviorOnWorksheet',
          'Only SheetSizeBehavior.AUTOMATIC is allowed on Worksheets',
        );
      }),
      (U.createNoUrlForHiddenWorksheet = function () {
        return U.create(
          'noUrlForHiddenWorksheet',
          'Hidden worksheets do not have a URL.',
        );
      }),
      (U.$createInvalidAggregationFieldName = function (e) {
        return U.create(
          'invalidAggregationFieldName',
          "Invalid aggregation type for field '" + e + "'",
        );
      }),
      (U.createIndexOutOfRange = function (e) {
        return U.create(
          'indexOutOfRange',
          "Index '" + e + "' is out of range.",
        );
      }),
      (U.createUnsupportedEventName = function (e) {
        return U.create(
          'unsupportedEventName',
          "Unsupported event '" + e + "'.",
        );
      }),
      (U.createBrowserNotCapable = function () {
        return U.create(
          'browserNotCapable',
          'This browser is incapable of supporting the Tableau JavaScript API.',
        );
      }),
      (e.tab._TableauException = U);
    var M = function () {};
    (M.__typeName = 'tab._Utility'),
      (M.isNullOrEmpty = function (e) {
        return t.isNullOrUndefined(e) || (e.length || 0) <= 0;
      }),
      (M.isString = function (e) {
        return 'string' == typeof e;
      }),
      (M.isNumber = function (e) {
        return 'number' == typeof e;
      }),
      (M.isDate = function (e) {
        return (
          !('object' != typeof e || !t.isInstanceOfType(e, t.JsDate)) ||
          ('[object Date]' === Object.prototype.toString.call(e) &&
            !isNaN(t.cast(e, t.JsDate).getTime()))
        );
      }),
      (M.isDateValid = function (e) {
        return !isNaN(e.getTime());
      }),
      (M.indexOf = function (e, i, n) {
        if (t.isValue(Array.prototype.indexOf))
          return t.unbox(t.cast(e.indexOf(i, n), t.Int32));
        n = n || 0;
        var r = e.length;
        if (r > 0)
          for (var a = n; a < r; a++) if (t.referenceEquals(e[a], i)) return a;
        return -1;
      }),
      (M.contains = function (e, t, i) {
        return M.indexOf(e, t, i) >= 0;
      }),
      (M.getTopmostWindow = function () {
        for (
          var e = window.self;
          t.isValue(e.parent) && !t.referenceEquals(e.parent, e);

        )
          e = e.parent;
        return e;
      }),
      (M.toInt = function (e) {
        if (M.isNumber(e)) return t.Int32.trunc(e);
        var i = parseInt(e.toString(), 10);
        return isNaN(i) ? 0 : i;
      }),
      (M.hasClass = function (e, i) {
        var n = new RegExp('[\\n\\t\\r]', 'g');
        return (
          t.isValue(e) &&
          (' ' + e.className + ' ').replace(n, ' ').indexOf(' ' + i + ' ') > -1
        );
      }),
      (M.findParentWithClassName = function (e, n, r) {
        var a = t.isValue(e) ? t.cast(e.parentNode, i) : null;
        for (r = r || document.body; t.isValue(a); ) {
          if (M.hasClass(a, n)) return a;
          a = t.referenceEquals(a, r) ? null : t.cast(a.parentNode, i);
        }
        return a;
      }),
      (M.hasJsonParse = function () {
        return !(!t.isValue(JSON) || !t.isValue(JSON.parse));
      }),
      (M.hasWindowPostMessage = function () {
        return !!t.isValue(window.postMessage);
      }),
      (M.isPostMessageSynchronous = function () {
        if (M.isIE()) {
          var e =
            new RegExp('(msie) ([\\w.]+)').exec(
              window.navigator.userAgent.toLowerCase(),
            )[2] || '0';
          return parseInt(e, 10) <= 8;
        }
        return !1;
      }),
      (M.hasDocumentAttachEvent = function () {
        return !!t.isValue(document.attachEvent);
      }),
      (M.hasWindowAddEventListener = function () {
        return !!t.isValue(window.addEventListener);
      }),
      (M.isElementOfTag = function (e, i) {
        return (
          t.isValue(e) &&
          1 === e.nodeType &&
          t.referenceEquals(e.tagName.toLowerCase(), i.toLowerCase())
        );
      }),
      (M.elementToString = function (e) {
        var i = new t.StringBuilder();
        if (
          (i.append(e.tagName.toLowerCase()),
          M.isNullOrEmpty(e.id) || i.append('#').append(e.id),
          !M.isNullOrEmpty(e.className))
        ) {
          var n = e.className.split(' ');
          i.append('.').append(n.join('.'));
        }
        return i.toString();
      }),
      (M.tableauGCS = function (e) {
        return 'function' == typeof window.getComputedStyle
          ? window.getComputedStyle(e)
          : e.currentStyle;
      }),
      (M.isIE = function () {
        return !!(
          window.navigator.userAgent.indexOf('MSIE') > -1 &&
          t.isNullOrUndefined(window.opera)
        );
      }),
      (M.isSafari = function () {
        var e = window.navigator.userAgent,
          t = e.indexOf('Chrome') >= 0;
        return e.indexOf('Safari') >= 0 && !t;
      }),
      (M.mobileDetect = function () {
        var e = window.navigator.userAgent;
        return (
          -1 !== e.indexOf('iPad') ||
          -1 !== e.indexOf('Android') ||
          (-1 !== e.indexOf('AppleWebKit') && -1 !== e.indexOf('Mobile'))
        );
      }),
      (M.visibleContentRectInDocumentCoordinates = function (e) {
        for (
          var i = M.contentRectInDocumentCoordinates(e), n = e.parentElement;
          t.isValue(n) && t.isValue(n.parentElement);
          n = n.parentElement
        ) {
          var a = M.$getComputedStyle(n).overflow;
          ('auto' !== a && 'scroll' !== a && 'hidden' !== a) ||
            (i = i.intersect(M.contentRectInDocumentCoordinates(n)));
        }
        var s = M.contentRectInDocumentCoordinates(document.documentElement),
          o = new r.WindowHelper(window.self);
        return (
          o.isQuirksMode() &&
            ((s.height = document.body.clientHeight - s.left),
            (s.width = document.body.clientWidth - s.top)),
          (s.left += o.get_pageXOffset()),
          (s.top += o.get_pageYOffset()),
          i.intersect(s)
        );
      }),
      (M.contentRectInDocumentCoordinates = function (e) {
        var t = M.getBoundingClientRect(e),
          i = M.$getComputedStyle(e),
          n = M.toInt(i.paddingLeft),
          a = M.toInt(i.paddingTop),
          s = M.toInt(i.borderLeftWidth),
          o = M.toInt(i.borderTopWidth),
          l = M.computeContentSize(e),
          u = new r.WindowHelper(window.self),
          c = t.left + n + s + u.get_pageXOffset(),
          h = t.top + a + o + u.get_pageYOffset();
        return new F(c, h, l.width, l.height);
      }),
      (M.getBoundingClientRect = function (e) {
        var i = e.getBoundingClientRect(),
          n = t.Int32.trunc(i.top),
          r = t.Int32.trunc(i.left),
          a = t.Int32.trunc(i.right),
          s = t.Int32.trunc(i.bottom);
        return new F(r, n, a - r, s - n);
      }),
      (M.convertRawValue = function (e, i) {
        if (t.isNullOrUndefined(e)) return null;
        switch (i) {
          case 'bool':
            return e;
          case 'date':
          case 'number':
            return t.isNullOrUndefined(e) ? Number.NaN : e;
          default:
          case 'string':
            return e;
        }
      }),
      (M.getDataValue = function (e) {
        return t.isNullOrUndefined(e)
          ? de.$ctor(null, null, null)
          : de.$ctor(
              M.convertRawValue(e.value, e.type),
              e.formattedValue,
              e.aliasedValue,
            );
      }),
      (M.serializeDateForServer = function (e) {
        var i = '';
        t.isValue(e) &&
          M.isDate(e) &&
          (i =
            e.getUTCFullYear() +
            '-' +
            (e.getUTCMonth() + 1) +
            '-' +
            e.getUTCDate() +
            ' ' +
            e.getUTCHours() +
            ':' +
            e.getUTCMinutes() +
            ':' +
            e.getUTCSeconds());
        return i;
      }),
      (M.computeContentSize = function (e) {
        var t = M.$getComputedStyle(e),
          i = parseFloat(t.paddingLeft),
          n = parseFloat(t.paddingTop),
          r = parseFloat(t.paddingRight),
          a = parseFloat(t.paddingBottom),
          s = e.clientWidth - Math.round(i + r),
          o = e.clientHeight - Math.round(n + a);
        return Ce.$ctor(s, o);
      }),
      (M.$getComputedStyle = function (e) {
        return 'function' == typeof window.getComputedStyle
          ? t.isValue(e.ownerDocument.defaultView.opener)
            ? e.ownerDocument.defaultView.getComputedStyle(e)
            : window.getComputedStyle(e)
          : t.isValue(e.currentStyle)
          ? e.currentStyle
          : e.style;
      }),
      (M.roundVizSizeInPixels = function (e) {
        if (t.isNullOrUndefined(e) || -1 === e.indexOf('px')) return e;
        var i = parseFloat(e.split('px')[0]);
        return Math.round(i) + 'px';
      }),
      (e.tab._Utility = M);
    var L = function () {};
    (L.__typeName = 'tab._VizManagerImpl'),
      (L.get_$clonedVizs = function () {
        return L.$vizs.concat();
      }),
      (L.$registerViz = function (e) {
        L.$verifyVizNotAlreadyParented(e), L.$vizs.push(e);
      }),
      (L.$unregisterViz = function (e) {
        for (var i = 0, n = L.$vizs.length; i < n; i++)
          if (t.referenceEquals(L.$vizs[i], e)) {
            L.$vizs.splice(i, 1);
            break;
          }
      }),
      (L.$sendVisibleRects = function () {
        for (var e = 0, t = L.$vizs.length; e < t; e++)
          L.$vizs[e]._impl.$sendVisibleRect();
      }),
      (L.$verifyVizNotAlreadyParented = function (e) {
        for (
          var i = e.getParentElement(), n = 0, r = L.$vizs.length;
          n < r;
          n++
        )
          if (t.referenceEquals(L.$vizs[n].getParentElement(), i)) {
            var a =
              "Another viz is already present in element '" +
              M.elementToString(i) +
              "'.";
            throw U.create('vizAlreadyInManager', a);
          }
      });
    var H = function (e, i, n) {
      if (
        ((this.name = ''),
        (this.host_url = null),
        (this.tabs = !1),
        (this.toolbar = !1),
        (this.toolBarPosition = null),
        (this.device = null),
        (this.hostId = null),
        (this.width = null),
        (this.height = null),
        (this.parentElement = null),
        (this.userSuppliedParameters = null),
        (this.staticImageUrl = null),
        (this.fixedSize = !1),
        (this.displayStaticImage = !1),
        (this.$urlFromApi = null),
        (this.$createOptions = null),
        t.isNullOrUndefined(e) || t.isNullOrUndefined(i))
      )
        throw U.create(
          'noUrlOrParentElementNotFound',
          'URL is empty or Parent element not found',
        );
      t.isNullOrUndefined(n) &&
        (((n = new Object()).hideTabs = !1),
        (n.hideToolbar = !1),
        (n.onFirstInteractive = null)),
        t.isValue(n.height) || t.isValue(n.width)
          ? ((this.fixedSize = !0),
            M.isNumber(n.height) && (n.height = n.height.toString() + 'px'),
            M.isNumber(n.width) && (n.width = n.width.toString() + 'px'),
            (this.height = t.isValue(n.height)
              ? M.roundVizSizeInPixels(n.height.toString())
              : null),
            (this.width = t.isValue(n.width)
              ? M.roundVizSizeInPixels(n.width.toString())
              : null))
          : (this.fixedSize = !1),
        (this.displayStaticImage = n.displayStaticImage || !1),
        (this.staticImageUrl = n.staticImageUrl || ''),
        (this.tabs = !n.hideTabs),
        (this.toolbar = !n.hideToolbar),
        (this.device = n.device),
        (this.parentElement = e),
        (this.$createOptions = n),
        (this.toolBarPosition = n.toolbarPosition);
      var r = i.split('?');
      (this.$urlFromApi = r[0]),
        2 === r.length
          ? (this.userSuppliedParameters = r[1])
          : (this.userSuppliedParameters = '');
      var a = new RegExp('.*?[^/:]/', '').exec(this.$urlFromApi);
      if (
        t.isNullOrUndefined(a) ||
        (-1 === a[0].toLowerCase().indexOf('http://') &&
          -1 === a[0].toLowerCase().indexOf('https://'))
      )
        throw U.create('invalidUrl', 'Invalid url');
      (this.host_url = a[0].toLowerCase()),
        (this.name = this.$urlFromApi.replace(a[0], '')),
        (this.name = this.name.replace('views/', ''));
    };
    (H.__typeName = 'tab._VizParameters'), (e.tab._VizParameters = H);
    var j = function (e, t, i) {
      (this.$workbook = null),
        (this.$vizImpl = null),
        (this.$name = null),
        (this.$activeSheetImpl = null),
        (this.$activatingHiddenSheetImpl = null),
        (this.$publishedSheetsInfo = new r._Collection()),
        (this.$isDownloadAllowed = !1),
        (this.$messagingOptions = null),
        (this.$currentCustomView = null),
        (this.$customViews = new r._Collection()),
        (this.$updatedCustomViews = new r._Collection()),
        (this.$removedCustomViews = new r._Collection()),
        (this.$parameters = null),
        (this.$lastChangedParameterImpl = null),
        (this.$vizImpl = e),
        (this.$messagingOptions = t),
        this.$getClientInfo(i);
    };
    (j.__typeName = 'tab._WorkbookImpl'),
      (j.$createDashboardZones = function (e) {
        e = t.coalesce(e, []);
        for (var i = [], n = 0; n < e.length; n++) {
          var r = e[n],
            a = B.convertDashboardObjectType(r.zoneType),
            s = Ce.$ctor(r.width, r.height),
            o = Se.$ctor(r.x, r.y),
            l = {
              name: r.name,
              objectType: a,
              position: o,
              size: s,
              zoneId: r.zoneId,
            };
          i.push(l);
        }
        return i;
      }),
      (j.$extractSheetName = function (e) {
        if (t.isNullOrUndefined(e)) return null;
        if (M.isString(e)) return e;
        var i = t.safeCast(e, Qe);
        if (t.isValue(i)) return i.getName();
        var n = t.safeCast(e, Je);
        return t.isValue(n) ? n.getName() : null;
      }),
      (j.$createSheetSize = function (e) {
        return t.isNullOrUndefined(e)
          ? Ie.createAutomatic()
          : Ie.fromSizeConstraints(e.sizeConstraints);
      }),
      (j.$processParameters = function (e) {
        for (var t = new r._Collection(), i = 0; i < e.parameters.length; i++) {
          var n = e.parameters[i],
            a = new g(n);
          t._add(a.get_$name(), a.get_$parameter());
        }
        return t;
      }),
      (j.$findAndCreateParameterImpl = function (e, i) {
        for (var n = 0; n < i.parameters.length; n++) {
          var r = i.parameters[n];
          if (t.referenceEquals(r.name, e)) return new g(r);
        }
        return null;
      }),
      (e.tab._WorkbookImpl = j);
    var W = function (e, t, i, n) {
      (this.$worksheet = null),
        (this.$parentDashboardImpl = null),
        (this.$filters = new r._Collection()),
        (this.$selectedMarks = new r._Collection()),
        (this.highlightedMarks = null),
        D.call(this, e, t, i),
        (this.$parentDashboardImpl = n);
    };
    (W.__typeName = 'tab._WorksheetImpl'),
      (W.$filterCommandError = function (e) {
        var i = e;
        if (t.isValue(i) && t.isValue(i.errorCode)) {
          var n = t.isValue(i.additionalInformation)
            ? i.additionalInformation.toString()
            : '';
          switch (i.errorCode) {
            case 'invalidFilterFieldName':
              return U.create('invalidFilterFieldName', n);
            case 'invalidFilterFieldValue':
              return U.create('invalidFilterFieldValue', n);
            case 'invalidAggregationFieldName':
              return U.$createInvalidAggregationFieldName(n);
            default:
              return U.createServerError(n);
          }
        }
        return null;
      }),
      (W.$normalizeRangeFilterOption = function (e) {
        if (t.isNullOrUndefined(e))
          throw U.createNullOrEmptyParameter('filterOptions');
        if (t.isNullOrUndefined(e.min) && t.isNullOrUndefined(e.max))
          throw U.create(
            'invalidParameter',
            'At least one of filterOptions.min or filterOptions.max must be specified.',
          );
        var i = new Object();
        return (
          t.isValue(e.min) && (i.min = e.min),
          t.isValue(e.max) && (i.max = e.max),
          t.isValue(e.nullOption) &&
            (i.nullOption = $.$normalizeEnum(ee).call(
              null,
              e.nullOption,
              'filterOptions.nullOption',
            )),
          i
        );
      }),
      (W.$normalizeRelativeDateFilterOptions = function (e) {
        if (t.isNullOrUndefined(e))
          throw U.createNullOrEmptyParameter('filterOptions');
        var i = new Object();
        if (
          ((i.rangeType = $.$normalizeEnum(G).call(
            null,
            e.rangeType,
            'filterOptions.rangeType',
          )),
          (i.periodType = $.$normalizeEnum(ne).call(
            null,
            e.periodType,
            'filterOptions.periodType',
          )),
          'lastn' === i.rangeType || 'nextn' === i.rangeType)
        ) {
          if (t.isNullOrUndefined(e.rangeN))
            throw U.create(
              'missingRangeNForRelativeDateFilters',
              'Missing rangeN field for a relative date filter of LASTN or NEXTN.',
            );
          i.rangeN = M.toInt(e.rangeN);
        }
        if (t.isValue(e.anchorDate)) {
          if (!M.isDate(e.anchorDate) || !M.isDateValid(e.anchorDate))
            throw U.createInvalidDateParameter('filterOptions.anchorDate');
          i.anchorDate = e.anchorDate;
        }
        return i;
      }),
      (W.$createFilterCommandReturnHandler = function (e, i, n) {
        return new (t.makeGenericType(ue, [Object]))(
          e,
          1,
          function (e) {
            var r = W.$filterCommandError(e);
            t.isNullOrUndefined(r) ? n.resolve(i) : n.reject(r);
          },
          function (e, t) {
            if (e) n.reject(U.createInvalidFilterFieldNameOrValue(i));
            else {
              var r = U.create('filterCannotBePerformed', t);
              n.reject(r);
            }
          },
        );
      }),
      (W.$createSelectionCommandError = function (e) {
        var i = e;
        if (t.isValue(i) && t.isValue(i.errorCode)) {
          var n = t.isValue(i.additionalInformation)
            ? i.additionalInformation.toString()
            : '';
          switch (i.errorCode) {
            case 'invalidSelectionFieldName':
              return U.create('invalidSelectionFieldName', n);
            case 'invalidSelectionValue':
              return U.create('invalidSelectionValue', n);
            case 'invalidSelectionDate':
              return U.create('invalidSelectionDate', n);
          }
        }
        return null;
      }),
      (e.tab._WorksheetImpl = W);
    var q = function () {};
    (q.__typeName = 'tab.ApiDashboardObjectType'),
      (e.tab.ApiDashboardObjectType = q);
    var G = function () {};
    (G.__typeName = 'tab.ApiDateRangeType'), (e.tab.ApiDateRangeType = G);
    var K = function () {};
    (K.__typeName = 'tab.ApiDeviceType'), (e.tab.ApiDeviceType = K);
    var B = function () {};
    (B.__typeName = 'tab.ApiEnumConverter'),
      (B.convertDashboardObjectType = function (e) {
        switch (e) {
          case 'blank':
            return 'blank';
          case 'image':
            return 'image';
          case 'legend':
            return 'legend';
          case 'pageFilter':
            return 'pageFilter';
          case 'parameterControl':
            return 'parameterControl';
          case 'quickFilter':
            return 'quickFilter';
          case 'text':
            return 'text';
          case 'title':
            return 'title';
          case 'webPage':
            return 'webPage';
          case 'worksheet':
            return 'worksheet';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainDashboardObjectType: ' + e,
            );
        }
      }),
      (B.convertDateRange = function (e) {
        switch (e) {
          case 'curr':
            return 'curr';
          case 'last':
            return 'last';
          case 'lastn':
            return 'lastn';
          case 'next':
            return 'next';
          case 'nextn':
            return 'nextn';
          case 'todate':
            return 'todate';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainDateRangeType: ' + e,
            );
        }
      }),
      (B.convertFieldAggregation = function (e) {
        switch (e) {
          case 'ATTR':
            return 'ATTR';
          case 'AVG':
            return 'AVG';
          case 'COUNT':
            return 'COUNT';
          case 'COUNTD':
            return 'COUNTD';
          case 'DAY':
            return 'DAY';
          case 'END':
            return 'END';
          case 'HOUR':
            return 'HOUR';
          case 'INOUT':
            return 'INOUT';
          case 'KURTOSIS':
            return 'KURTOSIS';
          case 'MAX':
            return 'MAX';
          case 'MDY':
            return 'MDY';
          case 'MEDIAN':
            return 'MEDIAN';
          case 'MIN':
            return 'MIN';
          case 'MINUTE':
            return 'MINUTE';
          case 'MONTH':
            return 'MONTH';
          case 'MONTHYEAR':
            return 'MONTHYEAR';
          case 'NONE':
            return 'NONE';
          case 'PERCENTILE':
            return 'PERCENTILE';
          case 'QUART1':
            return 'QUART1';
          case 'QUART3':
            return 'QUART3';
          case 'QTR':
            return 'QTR';
          case 'SECOND':
            return 'SECOND';
          case 'SKEWNESS':
            return 'SKEWNESS';
          case 'STDEV':
            return 'STDEV';
          case 'STDEVP':
            return 'STDEVP';
          case 'SUM':
            return 'SUM';
          case 'SUM_XSQR':
            return 'SUM_XSQR';
          case 'TRUNC_DAY':
            return 'TRUNC_DAY';
          case 'TRUNC_HOUR':
            return 'TRUNC_HOUR';
          case 'TRUNC_MINUTE':
            return 'TRUNC_MINUTE';
          case 'TRUNC_MONTH':
            return 'TRUNC_MONTH';
          case 'TRUNC_QTR':
            return 'TRUNC_QTR';
          case 'TRUNC_SECOND':
            return 'TRUNC_SECOND';
          case 'TRUNC_WEEK':
            return 'TRUNC_WEEK';
          case 'TRUNC_YEAR':
            return 'TRUNC_YEAR';
          case 'USER':
            return 'USER';
          case 'VAR':
            return 'VAR';
          case 'VARP':
            return 'VARP';
          case 'WEEK':
            return 'WEEK';
          case 'WEEKDAY':
            return 'WEEKDAY';
          case 'YEAR':
            return 'YEAR';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainFieldAggregationType: ' + e,
            );
        }
      }),
      (B.convertFieldRole = function (e) {
        switch (e) {
          case 'dimension':
            return 'dimension';
          case 'measure':
            return 'measure';
          case 'unknown':
            return 'unknown';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainFieldRoleType: ' + e,
            );
        }
      }),
      (B.convertFilterType = function (e) {
        switch (e) {
          case 'categorical':
            return 'categorical';
          case 'hierarchical':
            return 'hierarchical';
          case 'quantitative':
            return 'quantitative';
          case 'relativedate':
            return 'relativedate';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainFilterType: ' + e,
            );
        }
      }),
      (B.convertParameterAllowableValuesType = function (e) {
        switch (e) {
          case 'all':
            return 'all';
          case 'list':
            return 'list';
          case 'range':
            return 'range';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainParameterAllowableValuesType: ' + e,
            );
        }
      }),
      (B.convertParameterDataType = function (e) {
        switch (e) {
          case 'boolean':
            return 'boolean';
          case 'date':
            return 'date';
          case 'datetime':
            return 'datetime';
          case 'float':
            return 'float';
          case 'integer':
            return 'integer';
          case 'string':
            return 'string';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainParameterDataType: ' + e,
            );
        }
      }),
      (B.convertPeriodType = function (e) {
        switch (e) {
          case 'year':
            return 'year';
          case 'quarter':
            return 'quarter';
          case 'month':
            return 'month';
          case 'week':
            return 'week';
          case 'day':
            return 'day';
          case 'hour':
            return 'hour';
          case 'minute':
            return 'minute';
          case 'second':
            return 'second';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainPeriodType: ' + e,
            );
        }
      }),
      (B.convertSheetType = function (e) {
        switch (e) {
          case 'worksheet':
            return 'worksheet';
          case 'dashboard':
            return 'dashboard';
          case 'story':
            return 'story';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainSheetType: ' + e,
            );
        }
      }),
      (B.convertDataType = function (e) {
        switch (e) {
          case 'boolean':
            return 'boolean';
          case 'date':
            return 'date';
          case 'datetime':
            return 'datetime';
          case 'float':
            return 'float';
          case 'integer':
            return 'integer';
          case 'string':
            return 'string';
          default:
            throw U.createInternalError(
              'Unknown ApiCrossDomainParameterDataType: ' + e,
            );
        }
      }),
      (e.tab.ApiEnumConverter = B);
    var Q = function () {};
    (Q.__typeName = 'tab.ApiErrorCode'), (e.tab.ApiErrorCode = Q);
    var J = function () {};
    (J.__typeName = 'tab.ApiFieldAggregationType'),
      (e.tab.ApiFieldAggregationType = J);
    var Y = function () {};
    (Y.__typeName = 'tab.ApiFieldRoleType'), (e.tab.ApiFieldRoleType = Y);
    var X = function () {};
    (X.__typeName = 'tab.ApiFilterType'), (e.tab.ApiFilterType = X);
    var Z = function () {};
    (Z.__typeName = 'tab.ApiFilterUpdateType'), (e.tab.ApiFilterUpdateType = Z);
    var ee = function () {};
    (ee.__typeName = 'tab.ApiNullOption'), (e.tab.ApiNullOption = ee);
    var te = function () {};
    (te.__typeName = 'tab.ApiParameterAllowableValuesType'),
      (e.tab.ApiParameterAllowableValuesType = te);
    var ie = function () {};
    (ie.__typeName = 'tab.ApiParameterDataType'),
      (e.tab.ApiParameterDataType = ie);
    var ne = function () {};
    (ne.__typeName = 'tab.ApiPeriodType'), (e.tab.ApiPeriodType = ne);
    var re = function () {};
    (re.__typeName = 'tab.ApiSelectionUpdateType'),
      (e.tab.ApiSelectionUpdateType = re);
    var ae = function () {};
    (ae.__typeName = 'tab.ApiSheetSizeBehavior'),
      (e.tab.ApiSheetSizeBehavior = ae);
    var se = function () {};
    (se.__typeName = 'tab.ApiSheetType'), (e.tab.ApiSheetType = se);
    var oe = function () {};
    (oe.__typeName = 'tab.ApiTableauEventName'),
      (e.tab.ApiTableauEventName = oe);
    var le = function () {};
    (le.__typeName = 'tab.ApiToolbarPosition'), (e.tab.ApiToolbarPosition = le);
    var ue = function (e) {
      var i = function (e, t, i, n) {
        (this.$commandName = null),
          (this.$successCallbackTiming = 0),
          (this.$successCallback = null),
          (this.$errorCallback = null),
          (this.$commandName = e),
          (this.$successCallback = i),
          (this.$successCallbackTiming = t),
          (this.$errorCallback = n);
      };
      return (
        t.registerGenericClassInstance(
          i,
          ue,
          [e],
          {
            get_commandName: function () {
              return this.$commandName;
            },
            get_successCallback: function () {
              return this.$successCallback;
            },
            get_successCallbackTiming: function () {
              return this.$successCallbackTiming;
            },
            get_errorCallback: function () {
              return this.$errorCallback;
            },
          },
          function () {
            return null;
          },
          function () {
            return [];
          },
        ),
        i
      );
    };
    (ue.__typeName = 'tab.CommandReturnHandler$1'),
      t.initGenericClass(ue, a, 1),
      (e.tab.CommandReturnHandler$1 = ue);
    var ce = function (e, t) {
      (this.$router = null),
        (this.$handler = null),
        T.verifyValue(e, 'router'),
        T.verifyValue(t, 'handler'),
        (this.$router = e),
        (this.$handler = t);
    };
    (ce.__typeName = 'tab.CrossDomainMessagingOptions'),
      (e.tab.CrossDomainMessagingOptions = ce);
    var he = function (e, t, i) {
      (this.$context = null),
        Ae.call(this, e, t),
        (this.$context = new o(t._impl.get__workbookImpl(), i));
    };
    (he.__typeName = 'tab.CustomViewEvent'), (e.tab.CustomViewEvent = he);
    var me = function () {};
    (me.__typeName = 'tab.DataType'), (e.tab.DataType = me);
    var de = function () {};
    (de.__typeName = 'tab.DataValue'),
      (de.$ctor = function (e, t, i) {
        var n = new Object();
        return (
          (n.value = null),
          (n.formattedValue = null),
          (n.value = e),
          M.isNullOrEmpty(i) ? (n.formattedValue = t) : (n.formattedValue = i),
          n
        );
      }),
      (e.tab.DataValue = de);
    var pe = function (e, t) {
      (this.$workbookImpl = null),
        (this.$worksheetImpl = null),
        (this.$workbookImpl = e),
        (this.$worksheetImpl = t);
    };
    (pe.__typeName = 'tab.EventContext'), (e.tab.EventContext = pe);
    var fe = function (e, t, i, n, r) {
      (this.$filterCaption = null),
        (this.$context = null),
        Fe.call(this, e, t, i),
        (this.$filterCaption = r),
        (this.$context = new h(t._impl.get__workbookImpl(), i, n, r));
    };
    (fe.__typeName = 'tab.FilterEvent'), (e.tab.FilterEvent = fe);
    var ge = function (e, t, i) {
      (this.$vizSize = null), Ae.call(this, e, t), (this.$vizSize = i);
    };
    (ge.__typeName = 'tab.FirstVizSizeKnownEvent'),
      (e.tab.FirstVizSizeKnownEvent = ge);
    var $e = function (e, t, i) {
      (this.$context = null),
        Fe.call(this, e, t, i),
        (this.$context = new m(t._impl.get__workbookImpl(), i));
    };
    ($e.__typeName = 'tab.HighlightEvent'), (e.tab.HighlightEvent = $e);
    var _e = function () {};
    (_e.__typeName = 'tab.ICrossDomainMessageHandler'),
      (e.tab.ICrossDomainMessageHandler = _e);
    var ve = function () {};
    (ve.__typeName = 'tab.ICrossDomainMessageRouter'),
      (e.tab.ICrossDomainMessageRouter = ve);
    var ye = function (e, t, i) {
      (this.$context = null),
        Fe.call(this, e, t, i),
        (this.$context = new p(t._impl.get__workbookImpl(), i));
    };
    (ye.__typeName = 'tab.MarksEvent'), (e.tab.MarksEvent = ye);
    var we = function (e, t, i) {
      (this.$context = null),
        Ae.call(this, e, t),
        (this.$context = new f(t._impl.get__workbookImpl(), i));
    };
    (we.__typeName = 'tab.ParameterEvent'), (e.tab.ParameterEvent = we);
    var Se = function () {};
    (Se.__typeName = 'tab.Point'),
      (Se.$ctor = function (e, t) {
        var i = new Object();
        return (i.x = 0), (i.y = 0), (i.x = e), (i.y = t), i;
      }),
      (e.tab.Point = Se);
    var be = function () {};
    (be.__typeName = 'tab.SheetSize'),
      (be.$ctor = function (e, i, n) {
        var r = new Object();
        return (
          (r.behavior = null),
          (r.minSize = null),
          (r.maxSize = null),
          (r.behavior = t.coalesce(e, 'automatic')),
          t.isValue(i) ? (r.minSize = i) : delete r.minSize,
          t.isValue(n) ? (r.maxSize = n) : delete r.maxSize,
          r
        );
      }),
      (e.tab.SheetSize = be);
    var Ie = function () {};
    (Ie.__typeName = 'tab.SheetSizeFactory'),
      (Ie.createAutomatic = function () {
        return be.$ctor('automatic', null, null);
      }),
      (Ie.fromSizeConstraints = function (e) {
        var t = e.minHeight,
          i = e.minWidth,
          n = e.maxHeight,
          r = e.maxWidth,
          a = 'automatic',
          s = null,
          o = null;
        return (
          0 === t && 0 === i
            ? (0 === n && 0 === r) || ((a = 'atmost'), (o = Ce.$ctor(r, n)))
            : 0 === n && 0 === r
            ? ((a = 'atleast'), (s = Ce.$ctor(i, t)))
            : n === t && r === i && i > 0
            ? ((a = 'exactly'), (s = Ce.$ctor(i, t)), (o = Ce.$ctor(i, t)))
            : ((a = 'range'),
              0 === i && 0 === r && (r = 2147483647),
              (s = Ce.$ctor(i, t)),
              (o = Ce.$ctor(r, n))),
          be.$ctor(a, s, o)
        );
      }),
      (e.tab.SheetSizeFactory = Ie);
    var Ce = function () {};
    (Ce.__typeName = 'tab.Size'),
      (Ce.$ctor = function (e, t) {
        var i = new Object();
        return (i.width = 0), (i.height = 0), (i.width = e), (i.height = t), i;
      }),
      (e.tab.Size = Ce);
    var Ne = function () {};
    (Ne.__typeName = 'tab.StoryPointInfoImplUtil'),
      (Ne.clone = function (e) {
        return x.$ctor(
          e.caption,
          e.index,
          e.storyPointId,
          e.isActive,
          e.isUpdated,
          e.parentStoryImpl,
        );
      }),
      (e.tab.StoryPointInfoImplUtil = Ne);
    var Ee = function (e, t, i, n) {
      (this.$oldStoryPointInfo = null),
        (this.$newStoryPoint = null),
        Ae.call(this, e, t),
        (this.$oldStoryPointInfo = i),
        (this.$newStoryPoint = n);
    };
    (Ee.__typeName = 'tab.StoryPointSwitchEvent'),
      (e.tab.StoryPointSwitchEvent = Ee);
    var Ae = function (e, t) {
      (this.$viz = null),
        (this.$eventName = null),
        (this.$viz = t),
        (this.$eventName = e);
    };
    (Ae.__typeName = 'tab.TableauEvent'), (e.tab.TableauEvent = Ae);
    var Ve = function (e, t, i, n) {
      (this.$oldName = null),
        (this.$newName = null),
        Ae.call(this, e, t),
        (this.$oldName = i),
        (this.$newName = n);
    };
    (Ve.__typeName = 'tab.TabSwitchEvent'), (e.tab.TabSwitchEvent = Ve);
    var ke = function (e, i, n, r, a) {
      if (
        ((this.$workbookTabSwitchHandler = null),
        (this.$viz = null),
        (this.$iframe = null),
        (this.$staticImage = null),
        (this.$parameters = null),
        (this.$initialAvailableSize = null),
        (this.$instanceId = null),
        (this.$workbookImpl = null),
        (this.$onFirstInteractiveCallback = null),
        (this.$onFirstVizSizeKnownCallback = null),
        (this.$onFirstInteractiveAlreadyCalled = !1),
        (this.$areTabsHidden = !1),
        (this.$isToolbarHidden = !1),
        (this.$areAutomaticUpdatesPaused = !1),
        (this.$messagingOptions = null),
        (this.$vizSize = null),
        (this.$windowResizeHandler = null),
        (this.$initializingWorkbookImpl = !1),
        (this.$1$CustomViewsListLoadField = null),
        (this.$1$StateReadyForQueryField = null),
        (this.$1$MarksSelectionField = null),
        (this.$1$MarksHighlightField = null),
        (this.$1$FilterChangeField = null),
        (this.$1$ParameterValueChangeField = null),
        (this.$1$CustomViewLoadField = null),
        (this.$1$CustomViewSaveField = null),
        (this.$1$CustomViewRemoveField = null),
        (this.$1$CustomViewSetDefaultField = null),
        (this.$1$TabSwitchField = null),
        (this.$1$StoryPointSwitchField = null),
        (this.$1$VizResizeField = null),
        !M.hasWindowPostMessage() || !M.hasJsonParse())
      )
        throw U.createBrowserNotCapable();
      (this.$messagingOptions = new ce(e, this)),
        (this.$viz = i),
        (t.isNullOrUndefined(n) || 1 !== n.nodeType) && (n = document.body),
        (this.$parameters = new H(n, r, a)),
        t.isValue(a) &&
          ((this.$onFirstInteractiveCallback = a.onFirstInteractive),
          (this.$onFirstVizSizeKnownCallback = a.onFirstVizSizeKnown));
    };
    (ke.__typeName = 'tab.VizImpl'), (e.tab.VizImpl = ke);
    var Te = function (e, t, i) {
      (this.$availableSize = null),
        Ae.call(this, e, t),
        (this.$availableSize = i);
    };
    (Te.__typeName = 'tab.VizResizeEvent'), (e.tab.VizResizeEvent = Te);
    var Oe = function () {};
    (Oe.__typeName = 'tab.VizSize'),
      (Oe.$ctor = function (e, t) {
        var i = new Object();
        return (
          (i.sheetSize = null),
          (i.chromeHeight = 0),
          (i.sheetSize = e),
          (i.chromeHeight = t),
          i
        );
      }),
      (e.tab.VizSize = Oe);
    var Fe = function (e, t, i) {
      (this.$worksheetImpl = null),
        Ae.call(this, e, t),
        (this.$worksheetImpl = i);
    };
    (Fe.__typeName = 'tab.WorksheetEvent'), (e.tab.WorksheetEvent = Fe);
    var De = function (e, t) {
      (this.$isExclude = !1),
        (this.$appliedValues = null),
        He.call(this, e, t),
        this.$initializeFromJson$1(t);
    };
    (De.__typeName = 'tableauSoftware.CategoricalFilter'),
      (e.tableauSoftware.CategoricalFilter = De);
    var Re = function (e) {
      (this.$impl = null), (this.$impl = e);
    };
    (Re.__typeName = 'tableauSoftware.Column'), (e.tableauSoftware.Column = Re);
    var ze = function (e) {
      (this._impl = null), (this._impl = e);
    };
    (ze.__typeName = 'tableauSoftware.CustomView'),
      (e.tableauSoftware.CustomView = ze);
    var Pe = function (e) {
      (this._impl = null), Qe.call(this, e);
    };
    (Pe.__typeName = 'tableauSoftware.Dashboard'),
      (e.tableauSoftware.Dashboard = Pe);
    var xe = function (e, i, n) {
      if (
        ((this.$zoneInfo = null),
        (this.$dashboard = null),
        (this.$worksheet = null),
        'worksheet' === e.objectType && t.isNullOrUndefined(n))
      )
        throw U.createInternalError(
          'worksheet parameter is required for WORKSHEET objects',
        );
      if ('worksheet' !== e.objectType && t.isValue(n))
        throw U.createInternalError(
          'worksheet parameter should be undefined for non-WORKSHEET objects',
        );
      (this.$zoneInfo = e), (this.$dashboard = i), (this.$worksheet = n);
    };
    (xe.__typeName = 'tableauSoftware.DashboardObject'),
      (e.tableauSoftware.DashboardObject = xe);
    var Ue = function (e) {
      (this.$impl = null), (this.$impl = e);
    };
    (Ue.__typeName = 'tableauSoftware.DataSource'),
      (e.tableauSoftware.DataSource = Ue);
    var Me = function (e) {
      (this.$impl = null), (this.$impl = e);
    };
    (Me.__typeName = 'tableauSoftware.DataTable'),
      (e.tableauSoftware.DataTable = Me);
    var Le = function (e, t, i, n) {
      (this.$dataSource = null),
        (this.$name = null),
        (this.$fieldRoleType = null),
        (this.$fieldAggrType = null),
        (this.$dataSource = e),
        (this.$name = t),
        (this.$fieldRoleType = i),
        (this.$fieldAggrType = n);
    };
    (Le.__typeName = 'tableauSoftware.Field'), (e.tableauSoftware.Field = Le);
    var He = function (e, t) {
      (this.$worksheetImpl = null),
        (this.$type = null),
        (this.$caption = null),
        (this.$field = null),
        (this.$dataSourceName = null),
        (this.$fieldRole = null),
        (this.$fieldAggregation = null),
        (this.$worksheetImpl = e),
        this.$initializeFromJson(t);
    };
    (He.__typeName = 'tableauSoftware.Filter'),
      (He.$createFilter = function (e, t) {
        switch (t.filterType) {
          case 'categorical':
            return new De(e, t);
          case 'relativedate':
            return new Be(e, t);
          case 'hierarchical':
            return new je(e, t);
          case 'quantitative':
            return new Ke(e, t);
        }
        return null;
      }),
      (He.processFiltersList = function (e, t) {
        for (var i = new r._Collection(), n = 0; n < t.filters.length; n++) {
          var a = t.filters[n];
          i._has(a.caption) || i._add(a.caption, a.caption);
        }
        for (var s = new r._Collection(), o = 0; o < t.filters.length; o++) {
          var l = t.filters[o],
            u = He.$createFilter(e, l);
          if (s._has(l.caption)) {
            for (
              var c = l.caption.toString() + '_' + l.filterType.toString(),
                h = c,
                m = 1;
              i._has(h);

            )
              (h = c + '_' + m), m++;
            s._add(h, u);
          } else s._add(l.caption, u);
        }
        return s;
      }),
      (e.tableauSoftware.Filter = He);
    var je = function (e, t) {
      (this.$levels = 0), He.call(this, e, t), this.$initializeFromJson$1(t);
    };
    (je.__typeName = 'tableauSoftware.HierarchicalFilter'),
      (e.tableauSoftware.HierarchicalFilter = je);
    var We = function (e) {
      (this.$impl = null), (this.$impl = new d(e));
    };
    (We.__typeName = 'tableauSoftware.Mark'), (e.tableauSoftware.Mark = We);
    var qe = function (e, i) {
      (this.fieldName = null),
        (this.value = null),
        (this.formattedValue = null),
        (this.fieldName = e),
        (this.value = i),
        (this.formattedValue = t.isValue(i) ? i.toString() : '');
    };
    (qe.__typeName = 'tableauSoftware.Pair'), (e.tableauSoftware.Pair = qe);
    var Ge = function (e) {
      (this._impl = null), (this._impl = e);
    };
    (Ge.__typeName = 'tableauSoftware.Parameter'),
      (e.tableauSoftware.Parameter = Ge);
    var Ke = function (e, t) {
      (this.$domainMin = null),
        (this.$domainMax = null),
        (this.$min = null),
        (this.$max = null),
        (this.$includeNullValues = !1),
        He.call(this, e, t),
        this.$initializeFromJson$1(t);
    };
    (Ke.__typeName = 'tableauSoftware.QuantitativeFilter'),
      (e.tableauSoftware.QuantitativeFilter = Ke);
    var Be = function (e, t) {
      (this.$periodType = null),
        (this.$rangeType = null),
        (this.$rangeN = 0),
        He.call(this, e, t),
        this.$initializeFromJson$1(t);
    };
    (Be.__typeName = 'tableauSoftware.RelativeDateFilter'),
      (e.tableauSoftware.RelativeDateFilter = Be);
    var Qe = function (e) {
      (this._impl = null), T.verifyValue(e, 'sheetImpl'), (this._impl = e);
    };
    (Qe.__typeName = 'tableauSoftware.Sheet'), (e.tableauSoftware.Sheet = Qe);
    var Je = function (e) {
      (this.$impl = null), (this.$impl = e);
    };
    (Je.__typeName = 'tableauSoftware.SheetInfo'),
      (e.tableauSoftware.SheetInfo = Je);
    var Ye = function (e) {
      (this._impl = null), Qe.call(this, e);
    };
    (Ye.__typeName = 'tableauSoftware.Story'), (e.tableauSoftware.Story = Ye);
    var Xe = function (e) {
      (this.$impl = null), (this.$impl = e);
    };
    (Xe.__typeName = 'tableauSoftware.StoryPoint'),
      (e.tableauSoftware.StoryPoint = Xe);
    var Ze = function (e) {
      (this._impl = null), (this._impl = e);
    };
    (Ze.__typeName = 'tableauSoftware.StoryPointInfo'),
      (e.tableauSoftware.StoryPointInfo = Ze);
    var et = function (e, i, n, r) {
      (this.$major = 0),
        (this.$minor = 0),
        (this.$patch = 0),
        (this.$metadata = null),
        (this.$major = e),
        (this.$minor = i),
        (this.$patch = n),
        (this.$metadata = t.coalesce(r, null));
    };
    (et.__typeName = 'tableauSoftware.Version'),
      (et.getCurrent = function () {
        return et.$currentVersion;
      }),
      (e.tableauSoftware.Version = et);
    var tt = function (e, t, i) {
      this._impl = null;
      var n = y.getCrossDomainMessageRouter();
      (this._impl = new ke(n, this, e, t, i)), this._impl.$create();
    };
    (tt.__typeName = 'tableauSoftware.Viz'),
      (tt.getLastRequestMessage = function () {
        return v.lastRequestMessage;
      }),
      (tt.getLastResponseMessage = function () {
        return v.lastResponseMessage;
      }),
      (tt.getLastClientInfoResponseMessage = function () {
        return v.lastClientInfoResponseMessage;
      }),
      (e.tableauSoftware.Viz = tt);
    var it = function () {};
    (it.__typeName = 'tableauSoftware.VizManager'),
      (it.getVizs = function () {
        return L.get_$clonedVizs();
      }),
      (e.tableauSoftware.VizManager = it);
    var nt = function (e) {
      (this.$workbookImpl = null), (this.$workbookImpl = e);
    };
    (nt.__typeName = 'tableauSoftware.Workbook'),
      (e.tableauSoftware.Workbook = nt);
    var rt,
      at = function (e) {
        (this._impl = null), Qe.call(this, e);
      };
    (at.__typeName = 'tableauSoftware.Worksheet'),
      (e.tableauSoftware.Worksheet = at),
      t.initInterface(ve, a, {
        registerHandler: null,
        unregisterHandler: null,
        sendCommand: null,
      }),
      t.initClass(
        s,
        a,
        {
          registerHandler: function (e) {
            var i = 'host' + this.$nextHandlerId;
            if (
              t.isValue(e.get_hostId()) ||
              t.isValue(this.$handlers[e.get_hostId()])
            )
              throw U.createInternalError(
                "Host '" + e.get_hostId() + "' is already registered.",
              );
            this.$nextHandlerId++,
              e.set_hostId(i),
              (this.$handlers[i] = e),
              e.add_customViewsListLoad(
                t.mkdel(this, this.$handleCustomViewsListLoad),
              ),
              e.add_stateReadyForQuery(
                t.mkdel(this, this.$handleStateReadyForQuery),
              );
          },
          unregisterHandler: function (e) {
            (t.isValue(e.get_hostId()) ||
              t.isValue(this.$handlers[e.get_hostId()])) &&
              (delete this.$handlers[e.get_hostId()],
              e.remove_customViewsListLoad(
                t.mkdel(this, this.$handleCustomViewsListLoad),
              ),
              e.remove_stateReadyForQuery(
                t.mkdel(this, this.$handleStateReadyForQuery),
              ));
          },
          sendCommand: function (e) {
            return function (e, i, n) {
              var r = e.get_iframe(),
                a = e.get_hostId();
              if (
                M.hasWindowPostMessage() &&
                !t.isNullOrUndefined(r) &&
                !t.isNullOrUndefined(r.contentWindow)
              ) {
                var s = v.generateNextCommandId(),
                  o = this.$commandCallbacks[a];
                t.isNullOrUndefined(o) &&
                  ((o = {}), (this.$commandCallbacks[a] = o)),
                  (o[s] = n);
                var l = n.get_commandName();
                if ('api.ShowCustomViewCommand' === l) {
                  var u = this.$customViewLoadCallbacks[a];
                  t.isNullOrUndefined(u) &&
                    ((u = []), (this.$customViewLoadCallbacks[a] = u)),
                    u.push(n);
                }
                var c = null;
                t.isValue(i) && (c = JSON.stringify(i));
                var h = new v(l, s, a, c).serialize();
                M.isPostMessageSynchronous()
                  ? window.setTimeout(function () {
                      r.contentWindow.postMessage(h, '*');
                    }, 0)
                  : r.contentWindow.postMessage(h, '*');
              }
            };
          },
          $handleCustomViewsListLoad: function (e) {
            var i = e.get_hostId(),
              n = this.$customViewLoadCallbacks[i];
            if (!t.isNullOrUndefined(n)) {
              for (var r = 0; r < n.length; r++) {
                var a = n[r];
                t.staticEquals(a.get_successCallback(), null) ||
                  a.get_successCallback()(null);
              }
              delete this.$customViewLoadCallbacks[i];
            }
          },
          $handleStateReadyForQuery: function (e) {
            var i = this.$commandReturnAfterStateReadyQueues[e.get_hostId()];
            if (!M.isNullOrEmpty(i))
              for (; i.length > 0; ) {
                var n = i.pop();
                t.isValue(n) && n();
              }
          },
          $handleCrossDomainMessage: function (e) {
            var i = t.cast(e, n);
            if (!t.isNullOrUndefined(i.data)) {
              var r = v.parse(i.data.toString()),
                a = r.get_rawName(),
                s = r.get_hostId(),
                o = this.$handlers[s];
              (!t.isNullOrUndefined(o) &&
                t.referenceEquals(o.get_hostId(), r.get_hostId())) ||
                (o = this.$findHostIdByDomComparison(i)),
                r.get_isApiCommandName()
                  ? t.referenceEquals(
                      r.get_commandId(),
                      v.crossDomainEventNotificationId,
                    )
                    ? (o.handleEventNotification(
                        r.get_name(),
                        r.get_parameters(),
                      ),
                      'api.FirstVizSizeKnownEvent' === r.get_name() &&
                        i.source.postMessage('tableau.bootstrap', '*'))
                    : this.$handleCrossDomainResponse(r)
                  : this.$handleLegacyNotifications(a, o);
            }
          },
          $handleCrossDomainResponse: function (e) {
            var i = this.$commandCallbacks[e.get_hostId()],
              n = t.isValue(i) ? i[e.get_commandId()] : null;
            if (
              !t.isNullOrUndefined(n) &&
              (delete i[e.get_commandId()],
              e.get_name() === n.get_commandName())
            ) {
              var r = new S(e.get_parameters()),
                a = r.get_data();
              if ('api.success' === r.get_result())
                switch (n.get_successCallbackTiming()) {
                  case 0:
                    t.isValue(n.get_successCallback()) &&
                      n.get_successCallback()(a);
                    break;
                  case 1:
                    var s = this.$commandReturnAfterStateReadyQueues[
                      e.get_hostId()
                    ];
                    t.isNullOrUndefined(s) &&
                      ((s = []),
                      (this.$commandReturnAfterStateReadyQueues[
                        e.get_hostId()
                      ] = s)),
                      s.push(function () {
                        t.isValue(n.get_successCallback()) &&
                          n.get_successCallback()(a);
                      });
                    break;
                  default:
                    throw U.createInternalError(
                      'Unknown timing value: ' + n.get_successCallbackTiming(),
                    );
                }
              else if (t.isValue(n.get_errorCallback())) {
                var o = 'api.remotefailed' === r.get_result(),
                  l = t.isValue(a) ? a.toString() : '';
                n.get_errorCallback()(o, l);
              }
            }
          },
          $handleLegacyNotifications: function (e, t) {
            'layoutInfoReq' === e
              ? L.$sendVisibleRects()
              : 'tableau.completed' === e || 'completed' === e
              ? t.handleVizLoad()
              : 'tableau.listening' === e && t.handleVizListening();
          },
          $findHostIdByDomComparison: function (e) {
            var i = new t.ObjectEnumerator(this.$handlers);
            try {
              for (; i.moveNext(); ) {
                var n = i.current();
                if (
                  this.$handlers.hasOwnProperty(n.key) &&
                  t.referenceEquals(
                    n.value.get_iframe().contentWindow,
                    e.source,
                  )
                )
                  return n.value;
              }
            } finally {
              i.dispose();
            }
            return new c();
          },
        },
        null,
        [ve],
      ),
      t.initClass(pe, a, {
        get__workbookImpl: function () {
          return this.$workbookImpl;
        },
        get__worksheetImpl: function () {
          return this.$worksheetImpl;
        },
      }),
      t.initClass(
        o,
        a,
        {
          get__customViewImpl: function () {
            return this.$customViewImpl;
          },
        },
        pe,
      ),
      t.initClass(l, a, {}),
      t.initClass(u, a, {}),
      t.initInterface(_e, a, {
        add_customViewsListLoad: null,
        remove_customViewsListLoad: null,
        add_stateReadyForQuery: null,
        remove_stateReadyForQuery: null,
        get_iframe: null,
        get_hostId: null,
        set_hostId: null,
        handleVizLoad: null,
        handleVizListening: null,
        handleEventNotification: null,
      }),
      t.initClass(
        c,
        a,
        {
          add_customViewsListLoad: function (e) {
            this.$1$CustomViewsListLoadField = t.delegateCombine(
              this.$1$CustomViewsListLoadField,
              e,
            );
          },
          remove_customViewsListLoad: function (e) {
            this.$1$CustomViewsListLoadField = t.delegateRemove(
              this.$1$CustomViewsListLoadField,
              e,
            );
          },
          add_stateReadyForQuery: function (e) {
            this.$1$StateReadyForQueryField = t.delegateCombine(
              this.$1$StateReadyForQueryField,
              e,
            );
          },
          remove_stateReadyForQuery: function (e) {
            this.$1$StateReadyForQueryField = t.delegateRemove(
              this.$1$StateReadyForQueryField,
              e,
            );
          },
          get_iframe: function () {
            return null;
          },
          get_hostId: function () {
            return this.$hostId;
          },
          set_hostId: function (e) {
            this.$hostId = e;
          },
          get_$serverRoot: function () {
            return '*';
          },
          handleVizLoad: function () {},
          handleVizListening: function () {},
          handleEventNotification: function (e, t) {},
          $silenceTheCompilerWarning: function () {
            this.$1$CustomViewsListLoadField(null),
              this.$1$StateReadyForQueryField(null);
          },
        },
        null,
        [_e],
      ),
      t.initClass(
        h,
        a,
        {
          get__filterFieldName: function () {
            return this.$fieldFieldName;
          },
          get_$filterCaption: function () {
            return this.$filterCaption;
          },
        },
        pe,
      ),
      t.initClass(m, a, {}, pe),
      t.initClass(d, a, {
        get_$pairs: function () {
          return this.$collection;
        },
        get_$tupleId: function () {
          return this.$tupleId;
        },
        get_$clonedPairs: function () {
          return (
            t.isNullOrUndefined(this.$clonedPairs) &&
              (this.$clonedPairs = this.$collection._toApiCollection()),
            this.$clonedPairs
          );
        },
        $addPair: function (e) {
          this.$collection._add(e.fieldName, e);
        },
      }),
      t.initClass(p, a, {}, pe),
      t.initClass(
        f,
        a,
        {
          get__parameterName: function () {
            return this.$parameterName;
          },
        },
        pe,
      ),
      t.initClass(g, a, {
        get_$parameter: function () {
          return (
            t.isNullOrUndefined(this.$parameter) &&
              (this.$parameter = new Ge(this)),
            this.$parameter
          );
        },
        get_$name: function () {
          return this.$name;
        },
        get_$currentValue: function () {
          return this.$currentValue;
        },
        get_$dataType: function () {
          return this.$dataType;
        },
        get_$allowableValuesType: function () {
          return this.$allowableValuesType;
        },
        get_$allowableValues: function () {
          return this.$allowableValues;
        },
        get_$minValue: function () {
          return this.$minValue;
        },
        get_$maxValue: function () {
          return this.$maxValue;
        },
        get_$stepSize: function () {
          return this.$stepSize;
        },
        get_$dateStepPeriod: function () {
          return this.$dateStepPeriod;
        },
      }),
      t.initClass($, a, {}),
      t.initClass(_, a, {}),
      t.initClass(v, a, {
        get_name: function () {
          return this.$1$NameField;
        },
        set_name: function (e) {
          this.$1$NameField = e;
        },
        get_hostId: function () {
          return this.$1$HostIdField;
        },
        set_hostId: function (e) {
          this.$1$HostIdField = e;
        },
        get_commandId: function () {
          return this.$1$CommandIdField;
        },
        set_commandId: function (e) {
          this.$1$CommandIdField = e;
        },
        get_parameters: function () {
          return this.$1$ParametersField;
        },
        set_parameters: function (e) {
          this.$1$ParametersField = e;
        },
        get_isApiCommandName: function () {
          return 0 === this.get_rawName().indexOf('api.', 0);
        },
        get_rawName: function () {
          return this.get_name().toString();
        },
        serialize: function () {
          var e = [];
          e.push(this.get_name()),
            e.push(this.get_commandId()),
            e.push(this.get_hostId()),
            t.isValue(this.get_parameters()) && e.push(this.get_parameters());
          var i = e.join(',');
          return (v.lastRequestMessage = i), i;
        },
      }),
      t.initClass(y, a, {}),
      t.initClass(w, a, {
        get_workbookName: function () {
          return this.$workbookName;
        },
        get_worksheetName: function () {
          return this.$worksheetName;
        },
        get_data: function () {
          return this.$data;
        },
        serialize: function () {
          var e = {};
          return (
            (e['api.workbookName'] = this.$workbookName),
            (e['api.worksheetName'] = this.$worksheetName),
            (e['api.commandData'] = this.$data),
            JSON.stringify(e)
          );
        },
      }),
      t.initClass(S, a, {
        get_result: function () {
          return this.$commandResult;
        },
        get_data: function () {
          return this.$commandData;
        },
      }),
      t.initClass(b, a, {
        get__length: function () {
          return this.$items.length;
        },
        get__rawArray: function () {
          return this.$items;
        },
        get_item: function (e) {
          return this.$items[e];
        },
        _get: function (e) {
          var i = this.$ensureValidKey(e);
          if (t.isValue(this.$itemMap[i])) return this.$itemMap[i];
        },
        _has: function (e) {
          return t.isValue(this._get(e));
        },
        _add: function (e, t) {
          this.$verifyKeyAndItemParameters(e, t);
          var i = this.$ensureValidKey(e);
          this.$items.push(t), (this.$itemMap[i] = t);
        },
        _addToFirst: function (e, t) {
          this.$verifyKeyAndItemParameters(e, t);
          var i = this.$ensureValidKey(e);
          this.$items.unshift(t), (this.$itemMap[i] = t);
        },
        _remove: function (e) {
          var i = this.$ensureValidKey(e);
          if (t.isValue(this.$itemMap[i])) {
            var n = this.$itemMap[i];
            delete this.$itemMap[i];
            for (var r = 0; r < this.$items.length; r++)
              if (t.referenceEquals(this.$items[r], n)) {
                this.$items.splice(r, 1);
                break;
              }
          }
        },
        _toApiCollection: function () {
          var e = this.$items.concat();
          return (
            (e.get = t.mkdel(this, function (e) {
              return this._get(e);
            })),
            (e.has = t.mkdel(this, function (e) {
              return this._has(e);
            })),
            e
          );
        },
        $verifyUniqueKeyParameter: function (e) {
          if (M.isNullOrEmpty(e)) throw new t.Exception('Null key');
          if (this._has(e)) throw new t.Exception("Duplicate key '" + e + "'");
        },
        $verifyKeyAndItemParameters: function (e, i) {
          if ((this.$verifyUniqueKeyParameter(e), t.isNullOrUndefined(i)))
            throw new t.Exception('Null item');
        },
        $ensureValidKey: function (e) {
          return '_' + e;
        },
      }),
      t.initClass(I, a, {
        get_fieldName: function () {
          return this.$fieldName;
        },
        get_dataType: function () {
          return this.$dataType;
        },
        get_isReferenced: function () {
          return this.$isReferenced;
        },
        get_index: function () {
          return this.$index;
        },
      }),
      t.initClass(C, a, {
        get_$customView: function () {
          return (
            t.isNullOrUndefined(this.$customView) &&
              (this.$customView = new ze(this)),
            this.$customView
          );
        },
        get_$workbook: function () {
          return this.$workbookImpl.get_workbook();
        },
        get_$url: function () {
          return this.$url;
        },
        get_$name: function () {
          return this.$name;
        },
        set_$name: function (e) {
          if (this.$isStale) throw U.create('staleDataReference', 'Stale data');
          this.$name = e;
        },
        get_$ownerName: function () {
          return this.$ownerName;
        },
        get_$advertised: function () {
          return this.$isPublic;
        },
        set_$advertised: function (e) {
          if (this.$isStale) throw U.create('staleDataReference', 'Stale data');
          this.$isPublic = e;
        },
        get_$isDefault: function () {
          return this.$isDefault;
        },
        $saveAsync: function () {
          if (this.$isStale || t.isNullOrUndefined(this.$presModel))
            throw U.create('staleDataReference', 'Stale data');
          (this.$presModel.isPublic = this.$isPublic),
            (this.$presModel.name = this.$name);
          var e = new r._Deferred(),
            i = {};
          i['api.customViewParam'] = this.$presModel;
          var n = C.$createCustomViewCommandReturnHandler(
            'api.UpdateCustomViewCommand',
            e,
            t.mkdel(this, function (t) {
              C._processCustomViewUpdate(
                this.$workbookImpl,
                this.$messagingOptions,
                t,
                !0,
              ),
                e.resolve(this.get_$customView());
            }),
          );
          return (
            this.$messagingOptions
              .sendCommand(Object)
              .call(this.$messagingOptions, i, n),
            e.get_promise()
          );
        },
        $removeAsync: function () {
          var e = new r._Deferred(),
            i = {};
          i['api.customViewParam'] = this.$presModel;
          var n = C.$createCustomViewCommandReturnHandler(
            'api.RemoveCustomViewCommand',
            e,
            t.mkdel(this, function (t) {
              (this.$isStale = !0),
                C._processCustomViews(
                  this.$workbookImpl,
                  this.$messagingOptions,
                  t,
                ),
                e.resolve(this.get_$customView());
            }),
          );
          return (
            this.$messagingOptions
              .sendCommand(Object)
              .call(this.$messagingOptions, i, n),
            e.get_promise()
          );
        },
        _showAsync: function () {
          if (this.$isStale || t.isNullOrUndefined(this.$presModel))
            throw U.create('staleDataReference', 'Stale data');
          return C._showCustomViewAsync(
            this.$workbookImpl,
            this.$messagingOptions,
            this.$presModel,
          );
        },
        $isDifferent: function (e) {
          return (
            !t.referenceEquals(this.$ownerName, e.$ownerName) ||
            !t.referenceEquals(this.$url, e.$url) ||
            this.$isPublic !== e.$isPublic ||
            this.$isDefault !== e.$isDefault
          );
        },
      }),
      t.initClass(D, a, {
        get_sheet: null,
        get_name: function () {
          return this.$name;
        },
        get_index: function () {
          return this.$index;
        },
        get_workbookImpl: function () {
          return this.$workbookImpl;
        },
        get_workbook: function () {
          return this.$workbookImpl.get_workbook();
        },
        get_url: function () {
          if (this.$isHidden) throw U.createNoUrlForHiddenWorksheet();
          return this.$url;
        },
        get_size: function () {
          return this.$size;
        },
        get_isHidden: function () {
          return this.$isHidden;
        },
        get_isActive: function () {
          return this.$isActive;
        },
        set_isActive: function (e) {
          this.$isActive = e;
        },
        get_isDashboard: function () {
          return 'dashboard' === this.$sheetType;
        },
        get_isStory: function () {
          return 'story' === this.$sheetType;
        },
        get_sheetType: function () {
          return this.$sheetType;
        },
        get_parentStoryPoint: function () {
          return t.isValue(this.$parentStoryPointImpl)
            ? this.$parentStoryPointImpl.get_storyPoint()
            : null;
        },
        get_parentStoryPointImpl: function () {
          return this.$parentStoryPointImpl;
        },
        set_parentStoryPointImpl: function (e) {
          if ('story' === this.$sheetType)
            throw U.createInternalError(
              'A story cannot be a child of another story.',
            );
          this.$parentStoryPointImpl = e;
        },
        get_zoneId: function () {
          return this.$zoneId;
        },
        get_messagingOptions: function () {
          return this.$messagingOptions;
        },
        changeSizeAsync: function (e) {
          if (
            ((e = D.$normalizeSheetSize(e)),
            'worksheet' === this.$sheetType && 'automatic' !== e.behavior)
          )
            throw U.createInvalidSizeBehaviorOnWorksheet();
          var i = new r._Deferred();
          if (this.$size.behavior === e.behavior && 'automatic' === e.behavior)
            return i.resolve(e), i.get_promise();
          var n = this.$processSheetSize(e),
            a = {};
          (a['api.setSheetSizeName'] = this.$name),
            (a['api.minWidth'] = n['api.minWidth']),
            (a['api.minHeight'] = n['api.minHeight']),
            (a['api.maxWidth'] = n['api.maxWidth']),
            (a['api.maxHeight'] = n['api.maxHeight']);
          var s = new (t.makeGenericType(ue, [Object]))(
            'api.SetSheetSizeCommand',
            1,
            t.mkdel(this, function (e) {
              this.get_workbookImpl()._update(
                t.mkdel(this, function () {
                  var e = this.get_workbookImpl()
                    .get_publishedSheets()
                    ._get(this.get_name())
                    .getSize();
                  i.resolve(e);
                }),
              );
            }),
            function (e, t) {
              i.reject(U.createServerError(t));
            },
          );
          return this.sendCommand(Object).call(this, a, s), i.get_promise();
        },
        sendCommand: function (e) {
          return function (t, i) {
            this.$messagingOptions
              .sendCommand(e)
              .call(this.$messagingOptions, t, i);
          };
        },
        $processSheetSize: function (e) {
          var i = null;
          if (
            t.isNullOrUndefined(e) ||
            t.isNullOrUndefined(e.behavior) ||
            ('automatic' !== e.behavior &&
              t.isNullOrUndefined(e.minSize) &&
              t.isNullOrUndefined(e.maxSize))
          )
            throw U.createInvalidSheetSizeParam();
          var n = 0,
            r = 0,
            a = 0,
            s = 0,
            o = {
              'api.minWidth': 0,
              'api.minHeight': 0,
              'api.maxWidth': 0,
              'api.maxHeight': 0,
            };
          if ('automatic' === e.behavior)
            i = be.$ctor('automatic', void 0, void 0);
          else if ('atmost' === e.behavior) {
            if (
              t.isNullOrUndefined(e.maxSize) ||
              t.isNullOrUndefined(e.maxSize.width) ||
              t.isNullOrUndefined(e.maxSize.height)
            )
              throw U.createMissingMaxSize();
            if (e.maxSize.width < 0 || e.maxSize.height < 0)
              throw U.createInvalidSizeValue();
            (o['api.maxWidth'] = e.maxSize.width),
              (o['api.maxHeight'] = e.maxSize.height),
              (i = be.$ctor('atmost', void 0, e.maxSize));
          } else if ('atleast' === e.behavior) {
            if (
              t.isNullOrUndefined(e.minSize) ||
              t.isNullOrUndefined(e.minSize.width) ||
              t.isNullOrUndefined(e.minSize.height)
            )
              throw U.createMissingMinSize();
            if (e.minSize.width < 0 || e.minSize.height < 0)
              throw U.createInvalidSizeValue();
            (o['api.minWidth'] = e.minSize.width),
              (o['api.minHeight'] = e.minSize.height),
              (i = be.$ctor('atleast', e.minSize, void 0));
          } else if ('range' === e.behavior) {
            if (
              t.isNullOrUndefined(e.minSize) ||
              t.isNullOrUndefined(e.maxSize) ||
              t.isNullOrUndefined(e.minSize.width) ||
              t.isNullOrUndefined(e.maxSize.width) ||
              t.isNullOrUndefined(e.minSize.height) ||
              t.isNullOrUndefined(e.maxSize.height)
            )
              throw U.createMissingMinMaxSize();
            if (
              e.minSize.width < 0 ||
              e.minSize.height < 0 ||
              e.maxSize.width < 0 ||
              e.maxSize.height < 0 ||
              e.minSize.width > e.maxSize.width ||
              e.minSize.height > e.maxSize.height
            )
              throw U.createInvalidRangeSize();
            (o['api.minWidth'] = e.minSize.width),
              (o['api.minHeight'] = e.minSize.height),
              (o['api.maxWidth'] = e.maxSize.width),
              (o['api.maxHeight'] = e.maxSize.height),
              (i = be.$ctor('range', e.minSize, e.maxSize));
          } else if ('exactly' === e.behavior) {
            if (
              t.isValue(e.minSize) &&
              t.isValue(e.maxSize) &&
              t.isValue(e.minSize.width) &&
              t.isValue(e.maxSize.width) &&
              t.isValue(e.minSize.height) &&
              t.isValue(e.maxSize.height)
            ) {
              if (
                ((n = e.minSize.width),
                (r = e.minSize.height),
                (a = e.maxSize.width),
                (s = e.maxSize.height),
                n !== a || r !== s)
              )
                throw U.createSizeConflictForExactly();
            } else
              t.isValue(e.minSize) &&
              t.isValue(e.minSize.width) &&
              t.isValue(e.minSize.height)
                ? ((a = n = e.minSize.width), (s = r = e.minSize.height))
                : t.isValue(e.maxSize) &&
                  t.isValue(e.maxSize.width) &&
                  t.isValue(e.maxSize.height) &&
                  ((n = a = e.maxSize.width), (r = s = e.maxSize.height));
            (o['api.minWidth'] = n),
              (o['api.minHeight'] = r),
              (o['api.maxWidth'] = a),
              (o['api.maxHeight'] = s),
              (i = be.$ctor('exactly', Ce.$ctor(n, r), Ce.$ctor(a, s)));
          }
          return (this.$size = i), o;
        },
      }),
      t.initClass(
        N,
        a,
        {
          get_sheet: function () {
            return this.get_dashboard();
          },
          get_dashboard: function () {
            return (
              t.isNullOrUndefined(this.$dashboard) &&
                (this.$dashboard = new Pe(this)),
              this.$dashboard
            );
          },
          get_worksheets: function () {
            return this.$worksheets;
          },
          get_objects: function () {
            return this.$dashboardObjects;
          },
          $addObjects: function (e, i) {
            (this.$dashboardObjects = new r._Collection()),
              (this.$worksheets = new r._Collection());
            for (var n = 0; n < e.length; n++) {
              var a = e[n],
                s = null;
              if ('worksheet' === e[n].objectType) {
                var o = a.name;
                if (t.isNullOrUndefined(o)) continue;
                var l = this.$worksheets.get__length(),
                  u = Ie.createAutomatic(),
                  c = i(o),
                  h = t.isNullOrUndefined(c),
                  m = h ? '' : c.getUrl(),
                  d = R.$ctor(
                    o,
                    'worksheet',
                    l,
                    u,
                    this.get_workbook(),
                    m,
                    !1,
                    h,
                    a.zoneId,
                  ),
                  p = new W(
                    d,
                    this.get_workbookImpl(),
                    this.get_messagingOptions(),
                    this,
                  );
                (s = p.get_worksheet()),
                  this.$worksheets._add(o, p.get_worksheet());
              }
              var f = new xe(a, this.get_dashboard(), s);
              this.$dashboardObjects._add(n.toString(), f);
            }
          },
        },
        D,
      ),
      t.initClass(E, a, {
        get_dataSource: function () {
          return (
            t.isNullOrUndefined(this.$dataSource) &&
              (this.$dataSource = new Ue(this)),
            this.$dataSource
          );
        },
        get_name: function () {
          return this.$name;
        },
        get_fields: function () {
          return this.$fields;
        },
        get_isPrimary: function () {
          return this.$isPrimary;
        },
        addField: function (e) {
          this.$fields._add(e.getName(), e);
        },
      }),
      t.initClass(A, a, {
        get_name: function () {
          return this.$name;
        },
        get_rows: function () {
          return this.$rows;
        },
        get_columns: function () {
          return this.$columns;
        },
        get_totalRowCount: function () {
          return this.$totalRowCount;
        },
        get_isSummaryData: function () {
          return this.$isSummaryData;
        },
      }),
      t.initClass(V, a, {
        get_promise: function () {
          return this.$promise;
        },
        all: function (e) {
          var t = new V(),
            i = e.length,
            n = i,
            r = [];
          if (0 === i) return t.resolve(r), t.get_promise();
          for (
            var a = function (e, i) {
                u.$coerceToTrustedPromise(e).then(
                  function (e) {
                    return (r[i] = e), 0 === --n && t.resolve(r), null;
                  },
                  function (e) {
                    return t.reject(e), null;
                  },
                );
              },
              s = 0;
            s < i;
            s++
          )
            a(e[s], s);
          return t.get_promise();
        },
        then: function (e, t) {
          return this.$thenFunc(e, t);
        },
        resolve: function (e) {
          return this.$resolveFunc(e);
        },
        reject: function (e) {
          return this.$resolveFunc(u.$rejected(e));
        },
        $preResolutionThen: function (e, i) {
          var n = new V();
          return (
            this.$listeners.push(function (r) {
              r.then(e, i).then(t.mkdel(n, n.resolve), t.mkdel(n, n.reject));
            }),
            n.get_promise()
          );
        },
        $transitionToFulfilled: function (e) {
          var t = u.$coerceToTrustedPromise(e);
          (this.$thenFunc = t.then),
            (this.$resolveFunc = u.$coerceToTrustedPromise);
          for (var i = 0; i < this.$listeners.length; i++) {
            (0, this.$listeners[i])(t);
          }
          return (this.$listeners = null), t;
        },
      }),
      t.initClass(k, a, {}),
      t.initClass(T, a, {}),
      t.initClass(O, a, {
        always: function (e) {
          return t.cast(this.then(e, t.cast(e, Function)), O);
        },
        otherwise: function (e) {
          return t.cast(this.then(null, e), O);
        },
      }),
      t.initClass(F, a, {
        intersect: function (e) {
          var t = Math.max(this.left, e.left),
            i = Math.max(this.top, e.top),
            n = Math.min(this.left + this.width, e.left + e.width),
            r = Math.min(this.top + this.height, e.top + e.height);
          return n <= t || r <= i
            ? new F(0, 0, 0, 0)
            : new F(t, i, n - t, r - i);
        },
      }),
      t.initClass(R, a, {}, Object),
      t.initClass(
        z,
        a,
        {
          add_activeStoryPointChange: function (e) {
            this.$2$ActiveStoryPointChangeField = t.delegateCombine(
              this.$2$ActiveStoryPointChangeField,
              e,
            );
          },
          remove_activeStoryPointChange: function (e) {
            this.$2$ActiveStoryPointChangeField = t.delegateRemove(
              this.$2$ActiveStoryPointChangeField,
              e,
            );
          },
          get_activeStoryPointImpl: function () {
            return this.$activeStoryPointImpl;
          },
          get_sheet: function () {
            return this.get_story();
          },
          get_story: function () {
            return (
              t.isNullOrUndefined(this.$story) && (this.$story = new Ye(this)),
              this.$story
            );
          },
          get_storyPointsInfo: function () {
            return this.$storyPointsInfo;
          },
          update: function (e) {
            var i = null,
              n = null;
            this.$storyPointsInfo =
              this.$storyPointsInfo || new Array(e.storyPoints.length);
            for (var r = 0; r < e.storyPoints.length; r++) {
              var a = e.storyPoints[r],
                s = a.caption,
                o = r === e.activeStoryPointIndex,
                l = x.$ctor(s, r, a.storyPointId, o, a.isUpdated, this);
              if (t.isNullOrUndefined(this.$storyPointsInfo[r]))
                this.$storyPointsInfo[r] = new Ze(l);
              else if (
                this.$storyPointsInfo[r]._impl.storyPointId === l.storyPointId
              ) {
                var u = this.$storyPointsInfo[r]._impl;
                (u.caption = l.caption),
                  (u.index = l.index),
                  (u.isActive = o),
                  (u.isUpdated = l.isUpdated);
              } else this.$storyPointsInfo[r] = new Ze(l);
              o && ((i = a.containedSheetInfo), (n = l));
            }
            var c = this.$storyPointsInfo.length - e.storyPoints.length;
            this.$storyPointsInfo.splice(e.storyPoints.length, c);
            var h =
              t.isNullOrUndefined(this.$activeStoryPointImpl) ||
              this.$activeStoryPointImpl.get_storyPointId() !== n.storyPointId;
            t.isValue(this.$activeStoryPointImpl) &&
              h &&
              this.$activeStoryPointImpl.set_isActive(!1);
            var m = this.$activeStoryPointImpl;
            if (h) {
              var d = P.createContainedSheet(
                i,
                this.get_workbookImpl(),
                this.get_messagingOptions(),
                this.$findSheetFunc,
              );
              this.$activeStoryPointImpl = new P(n, d);
            } else
              this.$activeStoryPointImpl.set_isActive(n.isActive),
                this.$activeStoryPointImpl.set_isUpdated(n.isUpdated);
            h &&
              t.isValue(m) &&
              this.$raiseActiveStoryPointChange(
                this.$storyPointsInfo[m.get_index()],
                this.$activeStoryPointImpl.get_storyPoint(),
              );
          },
          activatePreviousStoryPointAsync: function () {
            return this.$activatePreviousNextStoryPointAsync(
              'api.ActivatePreviousStoryPoint',
            );
          },
          activateNextStoryPointAsync: function () {
            return this.$activatePreviousNextStoryPointAsync(
              'api.ActivateNextStoryPoint',
            );
          },
          activateStoryPointAsync: function (e) {
            var i = new r._Deferred();
            if (e < 0 || e >= this.$storyPointsInfo.length)
              throw U.createIndexOutOfRange(e);
            var n = this.get_activeStoryPointImpl(),
              a = {};
            a['api.storyPointIndex'] = e;
            var s = new (t.makeGenericType(ue, [Object]))(
              'api.ActivateStoryPoint',
              0,
              t.mkdel(this, function (e) {
                this.$updateActiveState(n, e),
                  i.resolve(this.$activeStoryPointImpl.get_storyPoint());
              }),
              function (e, t) {
                i.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, a, s), i.get_promise();
          },
          revertStoryPointAsync: function (e) {
            if (
              (e = e || this.$activeStoryPointImpl.get_index()) < 0 ||
              e >= this.$storyPointsInfo.length
            )
              throw U.createIndexOutOfRange(e);
            var i = new r._Deferred(),
              n = {};
            n['api.storyPointIndex'] = e;
            var a = new (t.makeGenericType(ue, [Object]))(
              'api.RevertStoryPoint',
              0,
              t.mkdel(this, function (t) {
                this.$updateStoryPointInfo(e, t),
                  i.resolve(this.$storyPointsInfo[e]);
              }),
              function (e, t) {
                i.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, n, a), i.get_promise();
          },
          $activatePreviousNextStoryPointAsync: function (e) {
            if (
              'api.ActivatePreviousStoryPoint' !== e &&
              'api.ActivateNextStoryPoint' !== e
            )
              throw U.createInternalError(
                "commandName '" + e + "' is invalid.",
              );
            var i = new r._Deferred(),
              n = this.get_activeStoryPointImpl(),
              a = new (t.makeGenericType(ue, [Object]))(
                e,
                0,
                t.mkdel(this, function (e) {
                  this.$updateActiveState(n, e),
                    i.resolve(this.$activeStoryPointImpl.get_storyPoint());
                }),
                function (e, t) {
                  i.reject(U.createServerError(t));
                },
              );
            return this.sendCommand(Object).call(this, {}, a), i.get_promise();
          },
          $updateStoryPointInfo: function (e, t) {
            var i = this.$storyPointsInfo[e]._impl;
            if (i.storyPointId !== t.storyPointId)
              throw U.createInternalError(
                "We should not be updating a story point where the IDs don't match. Existing storyPointID=" +
                  i.storyPointId +
                  ', newStoryPointID=' +
                  t.storyPointId,
              );
            (i.caption = t.caption),
              (i.isUpdated = t.isUpdated),
              t.storyPointId ===
                this.$activeStoryPointImpl.get_storyPointId() &&
                this.$activeStoryPointImpl.set_isUpdated(t.isUpdated);
          },
          $updateActiveState: function (e, t) {
            var i = t.index;
            if (e.get_index() !== i) {
              var n = this.$storyPointsInfo[e.get_index()],
                r = this.$storyPointsInfo[i]._impl,
                a = P.createContainedSheet(
                  t.containedSheetInfo,
                  this.get_workbookImpl(),
                  this.get_messagingOptions(),
                  this.$findSheetFunc,
                );
              (r.isActive = !0),
                (this.$activeStoryPointImpl = new P(r, a)),
                e.set_isActive(!1),
                (n._impl.isActive = !1),
                this.$raiseActiveStoryPointChange(
                  n,
                  this.$activeStoryPointImpl.get_storyPoint(),
                );
            }
          },
          $raiseActiveStoryPointChange: function (e, i) {
            t.staticEquals(this.$2$ActiveStoryPointChangeField, null) ||
              this.$2$ActiveStoryPointChangeField(e, i);
          },
        },
        D,
      ),
      t.initClass(P, a, {
        get_caption: function () {
          return this.$caption;
        },
        get_containedSheetImpl: function () {
          return this.$containedSheetImpl;
        },
        get_index: function () {
          return this.$index;
        },
        get_isActive: function () {
          return this.$isActive;
        },
        set_isActive: function (e) {
          this.$isActive = e;
        },
        get_isUpdated: function () {
          return this.$isUpdated;
        },
        set_isUpdated: function (e) {
          this.$isUpdated = e;
        },
        get_parentStoryImpl: function () {
          return this.$parentStoryImpl;
        },
        get_storyPoint: function () {
          return (
            t.isNullOrUndefined(this.$storyPoint) &&
              (this.$storyPoint = new Xe(this)),
            this.$storyPoint
          );
        },
        get_storyPointId: function () {
          return this.$storyPointId;
        },
        $toInfoImpl: function () {
          return x.$ctor(
            this.$caption,
            this.$index,
            this.$storyPointId,
            this.$isActive,
            this.$isUpdated,
            this.$parentStoryImpl,
          );
        },
      }),
      t.initClass(x, a, {}, Object),
      t.initClass(U, a, {}),
      t.initClass(M, a, {}),
      t.initClass(L, a, {}),
      t.initClass(H, a, {
        get_url: function () {
          return this.$constructUrl();
        },
        get_baseUrl: function () {
          return this.$urlFromApi;
        },
        $constructUrl: function () {
          var e = [];
          e.push(this.get_baseUrl()),
            e.push('?'),
            this.userSuppliedParameters.length > 0 &&
              (e.push(this.userSuppliedParameters), e.push('&')),
            !this.fixedSize &&
              !(-1 !== this.userSuppliedParameters.indexOf(':size=')) &&
              this.parentElement.clientWidth * this.parentElement.clientHeight >
                0 &&
              (e.push(':size='),
              e.push(
                this.parentElement.clientWidth +
                  ',' +
                  this.parentElement.clientHeight,
              ),
              e.push('&')),
            e.push(':embed=y'),
            e.push('&:showVizHome=n'),
            e.push('&:jsdebug=y'),
            this.fixedSize || e.push('&:bootstrapWhenNotified=y'),
            this.tabs || e.push('&:tabs=n'),
            this.displayStaticImage && e.push('&:display_static_image=y'),
            this.toolbar
              ? t.isNullOrUndefined(this.toolBarPosition) ||
                (e.push('&:toolbar='), e.push(this.toolBarPosition.toString()))
              : e.push('&:toolbar=n'),
            t.isValue(this.device) &&
              (e.push('&:device='), e.push(this.device.toString()));
          var i = this.$createOptions,
            n = new t.ObjectEnumerator(i);
          try {
            for (; n.moveNext(); ) {
              var r = n.current();
              'embed' !== r.key &&
                'height' !== r.key &&
                'width' !== r.key &&
                'device' !== r.key &&
                'autoSize' !== r.key &&
                'hideTabs' !== r.key &&
                'hideToolbar' !== r.key &&
                'onFirstInteractive' !== r.key &&
                'onFirstVizSizeKnown' !== r.key &&
                'toolbarPosition' !== r.key &&
                'instanceIdToClone' !== r.key &&
                'display_static_image' !== r.key &&
                (e.push('&'),
                e.push(encodeURIComponent(r.key)),
                e.push('='),
                e.push(encodeURIComponent(r.value.toString())));
            }
          } finally {
            n.dispose();
          }
          return (
            e.push('&:apiID=' + this.hostId),
            t.isValue(this.$createOptions.instanceIdToClone) &&
              e.push('#' + this.$createOptions.instanceIdToClone),
            e.join('')
          );
        },
      }),
      t.initClass(j, a, {
        get_workbook: function () {
          return (
            t.isNullOrUndefined(this.$workbook) &&
              (this.$workbook = new nt(this)),
            this.$workbook
          );
        },
        get_viz: function () {
          return this.$vizImpl.get_$viz();
        },
        get_publishedSheets: function () {
          return this.$publishedSheetsInfo;
        },
        get_name: function () {
          return this.$name;
        },
        get_activeSheetImpl: function () {
          return this.$activeSheetImpl;
        },
        get_activeCustomView: function () {
          return this.$currentCustomView;
        },
        get_isDownloadAllowed: function () {
          return this.$isDownloadAllowed;
        },
        $findActiveSheetOrSheetWithinActiveDashboard: function (e) {
          if (t.isNullOrUndefined(this.$activeSheetImpl)) return null;
          var i = j.$extractSheetName(e);
          if (t.isNullOrUndefined(i)) return null;
          if (t.referenceEquals(i, this.$activeSheetImpl.get_name()))
            return this.$activeSheetImpl;
          if (this.$activeSheetImpl.get_isDashboard()) {
            var n = t.cast(this.$activeSheetImpl, N).get_worksheets()._get(i);
            if (t.isValue(n)) return n._impl;
          }
          return null;
        },
        _setActiveSheetAsync: function (e) {
          if (M.isNumber(e)) {
            var i = e;
            if (i < this.$publishedSheetsInfo.get__length() && i >= 0)
              return this.$activateSheetWithInfoAsync(
                this.$publishedSheetsInfo.get_item(i).$impl,
              );
            throw U.createIndexOutOfRange(i);
          }
          var n = j.$extractSheetName(e),
            r = this.$publishedSheetsInfo._get(n);
          if (t.isValue(r)) return this.$activateSheetWithInfoAsync(r.$impl);
          if (this.$activeSheetImpl.get_isDashboard()) {
            var a = t.cast(this.$activeSheetImpl, N).get_worksheets()._get(n);
            if (t.isValue(a)) {
              this.$activatingHiddenSheetImpl = null;
              var s = '';
              return (
                a.getIsHidden()
                  ? (this.$activatingHiddenSheetImpl = a._impl)
                  : (s = a._impl.get_url()),
                this.$activateSheetInternalAsync(a._impl.get_name(), s)
              );
            }
          }
          throw U.create(
            'sheetNotInWorkbook',
            'Sheet is not found in Workbook',
          );
        },
        _revertAllAsync: function () {
          var e = new r._Deferred(),
            i = new (t.makeGenericType(ue, [Object]))(
              'api.RevertAllCommand',
              1,
              function (t) {
                e.resolve();
              },
              function (t, i) {
                e.reject(U.createServerError(i));
              },
            );
          return this.$sendCommand(Object).call(this, null, i), e.get_promise();
        },
        _update: function (e) {
          this.$getClientInfo(e);
        },
        $activateSheetWithInfoAsync: function (e) {
          return this.$activateSheetInternalAsync(e.name, e.url);
        },
        $activateSheetInternalAsync: function (e, i) {
          var n = new r._Deferred();
          if (
            t.isValue(this.$activeSheetImpl) &&
            t.referenceEquals(e, this.$activeSheetImpl.get_name())
          )
            return (
              n.resolve(this.$activeSheetImpl.get_sheet()), n.get_promise()
            );
          var a = {};
          (a['api.switchToSheetName'] = e),
            (a['api.switchToRepositoryUrl'] = i),
            (a['api.oldRepositoryUrl'] = this.$activeSheetImpl.get_url());
          var s = new (t.makeGenericType(ue, [Object]))(
            'api.SwitchActiveSheetCommand',
            0,
            t.mkdel(this, function (e) {
              this.$vizImpl.$workbookTabSwitchHandler = t.mkdel(
                this,
                function () {
                  (this.$vizImpl.$workbookTabSwitchHandler = null),
                    n.resolve(this.$activeSheetImpl.get_sheet());
                },
              );
            }),
            function (e, t) {
              n.reject(U.createServerError(t));
            },
          );
          return this.$sendCommand(Object).call(this, a, s), n.get_promise();
        },
        _updateActiveSheetAsync: function () {
          var e = new r._Deferred(),
            i = {};
          (i['api.switchToSheetName'] = this.$activeSheetImpl.get_name()),
            (i['api.switchToRepositoryUrl'] = this.$activeSheetImpl.get_url()),
            (i['api.oldRepositoryUrl'] = this.$activeSheetImpl.get_url());
          var n = new (t.makeGenericType(ue, [Object]))(
            'api.UpdateActiveSheetCommand',
            0,
            t.mkdel(this, function (t) {
              e.resolve(this.$activeSheetImpl.get_sheet());
            }),
            function (t, i) {
              e.reject(U.createServerError(i));
            },
          );
          return this.$sendCommand(Object).call(this, i, n), e.get_promise();
        },
        $sendCommand: function (e) {
          return function (t, i) {
            this.$messagingOptions
              .sendCommand(e)
              .call(this.$messagingOptions, t, i);
          };
        },
        $getClientInfo: function (e) {
          var i = new (t.makeGenericType(ue, [Object]))(
            'api.GetClientInfoCommand',
            0,
            t.mkdel(this, function (i) {
              this.$processInfo(i), t.isValue(e) && e();
            }),
            null,
          );
          this.$sendCommand(Object).call(this, null, i);
        },
        $processInfo: function (e) {
          (this.$name = e.workbookName),
            (this.$isDownloadAllowed = e.isDownloadAllowed),
            this.$vizImpl.$setAreAutomaticUpdatesPaused(!e.isAutoUpdate),
            this.$vizImpl.set_instanceId(e.instanceId),
            this.$createSheetsInfo(e),
            this.$initializeActiveSheet(e);
        },
        $initializeActiveSheet: function (e) {
          var i = e.currentSheetName,
            n = this.$publishedSheetsInfo._get(i);
          if (
            t.isNullOrUndefined(n) &&
            t.isNullOrUndefined(this.$activatingHiddenSheetImpl)
          )
            throw U.createInternalError(
              'The active sheet was not specified in baseSheets',
            );
          if (
            !t.isValue(this.$activeSheetImpl) ||
            !t.referenceEquals(this.$activeSheetImpl.get_name(), i)
          ) {
            if (t.isValue(this.$activeSheetImpl)) {
              this.$activeSheetImpl.set_isActive(!1);
              var r = this.$publishedSheetsInfo._get(
                this.$activeSheetImpl.get_name(),
              );
              if (
                (t.isValue(r) && (r.$impl.isActive = !1),
                'story' === this.$activeSheetImpl.get_sheetType())
              )
                t.cast(this.$activeSheetImpl, z).remove_activeStoryPointChange(
                  t.mkdel(this.$vizImpl, this.$vizImpl.raiseStoryPointSwitch),
                );
            }
            if (t.isValue(this.$activatingHiddenSheetImpl)) {
              var a = R.$ctor(
                this.$activatingHiddenSheetImpl.get_name(),
                'worksheet',
                -1,
                this.$activatingHiddenSheetImpl.get_size(),
                this.get_workbook(),
                '',
                !0,
                !0,
                D.noZoneId,
              );
              (this.$activatingHiddenSheetImpl = null),
                (this.$activeSheetImpl = new W(
                  a,
                  this,
                  this.$messagingOptions,
                  null,
                ));
            } else {
              for (
                var s = null, o = 0, l = e.publishedSheets.length;
                o < l;
                o++
              )
                if (t.referenceEquals(e.publishedSheets[o].name, i)) {
                  s = e.publishedSheets[o];
                  break;
                }
              if (t.isNullOrUndefined(s))
                throw U.createInternalError(
                  'No base sheet was found corresponding to the active sheet.',
                );
              var u = t.mkdel(this, function (e) {
                return this.$publishedSheetsInfo._get(e);
              });
              if ('dashboard' === s.sheetType) {
                var c = new N(n.$impl, this, this.$messagingOptions);
                this.$activeSheetImpl = c;
                var h = j.$createDashboardZones(e.dashboardZones);
                c.$addObjects(h, u);
              } else if ('story' === s.sheetType) {
                var m = new z(
                  n.$impl,
                  this,
                  this.$messagingOptions,
                  e.story,
                  u,
                );
                (this.$activeSheetImpl = m),
                  m.add_activeStoryPointChange(
                    t.mkdel(this.$vizImpl, this.$vizImpl.raiseStoryPointSwitch),
                  );
              } else
                this.$activeSheetImpl = new W(
                  n.$impl,
                  this,
                  this.$messagingOptions,
                  null,
                );
              n.$impl.isActive = !0;
            }
            this.$activeSheetImpl.set_isActive(!0);
          }
        },
        $createSheetsInfo: function (e) {
          var i = e.publishedSheets;
          if (!t.isNullOrUndefined(i))
            for (var n = 0; n < i.length; n++) {
              var r = i[n],
                a = r.name,
                s = this.$publishedSheetsInfo._get(a),
                o = j.$createSheetSize(r);
              if (t.isNullOrUndefined(s)) {
                var l = t.referenceEquals(a, e.currentSheetName),
                  u = B.convertSheetType(r.sheetType),
                  c = R.$ctor(
                    a,
                    u,
                    n,
                    o,
                    this.get_workbook(),
                    r.repositoryUrl,
                    l,
                    !1,
                    D.noZoneId,
                  );
                (s = new Je(c)), this.$publishedSheetsInfo._add(a, s);
              } else s.$impl.size = o;
            }
        },
        get_$customViews: function () {
          return this.$customViews;
        },
        set_$customViews: function (e) {
          this.$customViews = e;
        },
        get_$updatedCustomViews: function () {
          return this.$updatedCustomViews;
        },
        set_$updatedCustomViews: function (e) {
          this.$updatedCustomViews = e;
        },
        get_$removedCustomViews: function () {
          return this.$removedCustomViews;
        },
        set_$removedCustomViews: function (e) {
          this.$removedCustomViews = e;
        },
        get_$currentCustomView: function () {
          return this.$currentCustomView;
        },
        set_$currentCustomView: function (e) {
          this.$currentCustomView = e;
        },
        $getCustomViewsAsync: function () {
          return C._getCustomViewsAsync(this, this.$messagingOptions);
        },
        $showCustomViewAsync: function (e) {
          if (t.isNullOrUndefined(e) || M.isNullOrEmpty(e))
            return C._showCustomViewAsync(this, this.$messagingOptions, null);
          var i = this.$customViews._get(e);
          if (t.isNullOrUndefined(i)) {
            var n = new r._Deferred();
            return n.reject(U.createInvalidCustomViewName(e)), n.get_promise();
          }
          return i._impl._showAsync();
        },
        $removeCustomViewAsync: function (e) {
          if (M.isNullOrEmpty(e))
            throw U.createNullOrEmptyParameter('customViewName');
          var i = this.$customViews._get(e);
          if (t.isNullOrUndefined(i)) {
            var n = new r._Deferred();
            return n.reject(U.createInvalidCustomViewName(e)), n.get_promise();
          }
          return i._impl.$removeAsync();
        },
        $rememberCustomViewAsync: function (e) {
          if (M.isNullOrEmpty(e))
            throw U.createInvalidParameter('customViewName');
          return C._saveNewAsync(this, this.$messagingOptions, e);
        },
        $setActiveCustomViewAsDefaultAsync: function () {
          return C._makeCurrentCustomViewDefaultAsync(
            this,
            this.$messagingOptions,
          );
        },
        get_$lastChangedParameterImpl: function () {
          return this.$lastChangedParameterImpl;
        },
        set_$lastChangedParameterImpl: function (e) {
          this.$lastChangedParameterImpl = e;
        },
        get_$parameters: function () {
          return this.$parameters;
        },
        $getSingleParameterAsync: function (e) {
          var i = new r._Deferred();
          if (t.isValue(this.$lastChangedParameterImpl))
            return (
              i.resolve(this.$lastChangedParameterImpl.get_$parameter()),
              i.get_promise()
            );
          var n = new (t.makeGenericType(ue, [Object]))(
            'api.FetchParametersCommand',
            0,
            t.mkdel(this, function (t) {
              var n = j.$findAndCreateParameterImpl(e, t);
              (this.$lastChangedParameterImpl = n),
                i.resolve(n.get_$parameter());
            }),
            function (e, t) {
              i.reject(U.createServerError(t));
            },
          );
          return this.$sendCommand(Object).call(this, {}, n), i.get_promise();
        },
        $getParametersAsync: function () {
          var e = new r._Deferred(),
            i = new (t.makeGenericType(ue, [Object]))(
              'api.FetchParametersCommand',
              0,
              t.mkdel(this, function (t) {
                (this.$parameters = j.$processParameters(t)),
                  e.resolve(this.get_$parameters()._toApiCollection());
              }),
              function (t, i) {
                e.reject(U.createServerError(i));
              },
            );
          return this.$sendCommand(Object).call(this, {}, i), e.get_promise();
        },
        $changeParameterValueAsync: function (e, i) {
          var n = new r._Deferred(),
            a = null;
          if (t.isValue(this.$parameters)) {
            if (t.isNullOrUndefined(this.$parameters._get(e)))
              return n.reject(U.createInvalidParameter(e)), n.get_promise();
            if (((a = this.$parameters._get(e)._impl), t.isNullOrUndefined(a)))
              return n.reject(U.createInvalidParameter(e)), n.get_promise();
          }
          var s = {};
          if (
            ((s['api.setParameterName'] = t.isValue(this.$parameters)
              ? a.get_$name()
              : e),
            t.isValue(i) && M.isDate(i))
          ) {
            var o = t.cast(i, t.JsDate),
              l = M.serializeDateForServer(o);
            s['api.setParameterValue'] = l;
          } else
            s['api.setParameterValue'] = t.isValue(i) ? i.toString() : null;
          this.$lastChangedParameterImpl = null;
          var u = new (t.makeGenericType(ue, [Object]))(
            'api.SetParameterValueCommand',
            0,
            t.mkdel(this, function (i) {
              if (t.isNullOrUndefined(i))
                n.reject(U.create('serverError', 'server error'));
              else if (i.isValidPresModel) {
                var r = new g(i);
                (this.$lastChangedParameterImpl = r),
                  n.resolve(r.get_$parameter());
              } else n.reject(U.createInvalidParameter(e));
            }),
            function (t, i) {
              n.reject(U.createInvalidParameter(e));
            },
          );
          return this.$sendCommand(Object).call(this, s, u), n.get_promise();
        },
      }),
      t.initClass(
        W,
        a,
        {
          get_sheet: function () {
            return this.get_worksheet();
          },
          get_worksheet: function () {
            return (
              t.isNullOrUndefined(this.$worksheet) &&
                (this.$worksheet = new at(this)),
              this.$worksheet
            );
          },
          get_parentDashboardImpl: function () {
            return this.$parentDashboardImpl;
          },
          get_parentDashboard: function () {
            return t.isValue(this.$parentDashboardImpl)
              ? this.$parentDashboardImpl.get_dashboard()
              : null;
          },
          $getDataSourcesAsync: function () {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var e = new r._Deferred(),
              i = {};
            i['api.worksheetName'] = this.get_name();
            var n = new (t.makeGenericType(ue, [Object]))(
              'api.GetDataSourcesCommand',
              0,
              function (t) {
                var i = E.processDataSourcesForWorksheet(t);
                e.resolve(i._toApiCollection());
              },
              function (t, i) {
                e.reject(U.createServerError(i));
              },
            );
            return this.sendCommand(Object).call(this, i, n), e.get_promise();
          },
          $getDataSourceAsync: function (e) {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var i = new r._Deferred(),
              n = {};
            (n['api.dataSourceName'] = e),
              (n['api.worksheetName'] = this.get_name());
            var a = new (t.makeGenericType(ue, [Object]))(
              'api.GetDataSourceCommand',
              0,
              function (n) {
                var r = E.processDataSource(n);
                t.isValue(r)
                  ? i.resolve(r.get_dataSource())
                  : i.reject(
                      U.createServerError("Data source '" + e + "' not found"),
                    );
              },
              function (e, t) {
                i.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, n, a), i.get_promise();
          },
          $verifyActiveSheetOrEmbeddedInActiveDashboard: function () {
            var e = this.get_isActive(),
              i =
                t.isValue(this.$parentDashboardImpl) &&
                this.$parentDashboardImpl.get_isActive(),
              n =
                t.isValue(this.get_parentStoryPointImpl()) &&
                this.get_parentStoryPointImpl()
                  .get_parentStoryImpl()
                  .get_isActive();
            if (!e && !i && !n) throw U.createNotActiveSheet();
          },
          $addVisualIdToCommand: function (e) {
            if (t.isValue(this.get_parentStoryPointImpl())) {
              var i = {};
              (i.worksheet = this.get_name()),
                (i.dashboard = t.isValue(this.get_parentDashboardImpl())
                  ? this.$parentDashboardImpl.get_name()
                  : this.get_name()),
                (i.flipboardZoneId = this.get_parentStoryPointImpl()
                  .get_containedSheetImpl()
                  .get_zoneId()),
                (i.storyboard = this.get_parentStoryPointImpl()
                  .get_parentStoryImpl()
                  .get_name()),
                (i.storyPointId = this.get_parentStoryPointImpl().get_storyPointId()),
                (e['api.visualId'] = i);
            } else
              (e['api.worksheetName'] = this.get_name()),
                t.isValue(this.get_parentDashboardImpl()) &&
                  (e[
                    'api.dashboardName'
                  ] = this.get_parentDashboardImpl().get_name());
          },
          get__filters: function () {
            return this.$filters;
          },
          set__filters: function (e) {
            this.$filters = e;
          },
          $getFilterAsync: function (e, i, n) {
            if (!M.isNullOrEmpty(e) && !M.isNullOrEmpty(i))
              throw U.createInternalError(
                'Only fieldName OR fieldCaption is allowed, not both.',
              );
            n = n || new Object();
            var a = new r._Deferred(),
              s = {};
            this.$addVisualIdToCommand(s),
              !M.isNullOrEmpty(i) &&
                M.isNullOrEmpty(e) &&
                (s['api.fieldCaption'] = i),
              M.isNullOrEmpty(e) || (s['api.fieldName'] = e),
              (s['api.filterHierarchicalLevels'] = 0),
              (s['api.ignoreDomain'] = n.ignoreDomain || !1);
            var o = new (t.makeGenericType(ue, [Object]))(
              'api.GetOneFilterInfoCommand',
              0,
              t.mkdel(this, function (e) {
                var i = W.$filterCommandError(e);
                if (t.isNullOrUndefined(i)) {
                  var n = e,
                    r = He.$createFilter(this, n);
                  a.resolve(r);
                } else a.reject(i);
              }),
              function (e, t) {
                a.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, s, o), a.get_promise();
          },
          $getFiltersAsync: function (e) {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard(),
              (e = e || new Object());
            var i = new r._Deferred(),
              n = {};
            this.$addVisualIdToCommand(n),
              (n['api.ignoreDomain'] = e.ignoreDomain || !1);
            var a = new (t.makeGenericType(ue, [Object]))(
              'api.GetFiltersListCommand',
              0,
              t.mkdel(this, function (e) {
                this.set__filters(He.processFiltersList(this, e)),
                  i.resolve(this.get__filters()._toApiCollection());
              }),
              function (e, t) {
                i.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, n, a), i.get_promise();
          },
          $applyFilterAsync: function (e, t, i, n) {
            return this.$applyFilterWithValuesInternalAsync(e, t, i, n);
          },
          $clearFilterAsync: function (e) {
            return this.$clearFilterInternalAsync(e);
          },
          $applyRangeFilterAsync: function (e, t) {
            var i = W.$normalizeRangeFilterOption(t);
            return this.$applyRangeFilterInternalAsync(e, i);
          },
          $applyRelativeDateFilterAsync: function (e, t) {
            var i = W.$normalizeRelativeDateFilterOptions(t);
            return this.$applyRelativeDateFilterInternalAsync(e, i);
          },
          $applyHierarchicalFilterAsync: function (e, i, n, r) {
            if (t.isNullOrUndefined(i) && 'all' !== n)
              throw U.createInvalidParameter('values');
            return this.$applyHierarchicalFilterInternalAsync(e, i, n, r);
          },
          $clearFilterInternalAsync: function (e) {
            if (
              (this.$verifyActiveSheetOrEmbeddedInActiveDashboard(),
              M.isNullOrEmpty(e))
            )
              throw U.createNullOrEmptyParameter('fieldName');
            var t = new r._Deferred(),
              i = {};
            (i['api.fieldCaption'] = e), this.$addVisualIdToCommand(i);
            var n = W.$createFilterCommandReturnHandler(
              'api.ClearFilterCommand',
              e,
              t,
            );
            return this.sendCommand(Object).call(this, i, n), t.get_promise();
          },
          $applyFilterWithValuesInternalAsync: function (e, i, n, a) {
            if (
              (this.$verifyActiveSheetOrEmbeddedInActiveDashboard(),
              M.isNullOrEmpty(e))
            )
              throw U.createNullOrEmptyParameter('fieldName');
            n = $.$normalizeEnum(Z).call(null, n, 'updateType');
            var s = [];
            if (k.isArray(i))
              for (var o = 0; o < i.length; o++) s.push(i[o].toString());
            else t.isValue(i) && s.push(i.toString());
            var l = new r._Deferred(),
              u = {};
            (u['api.fieldCaption'] = e),
              (u['api.filterUpdateType'] = n),
              (u['api.exclude'] = !(!t.isValue(a) || !a.isExcludeMode)),
              'all' !== n && (u['api.filterCategoricalValues'] = s),
              this.$addVisualIdToCommand(u);
            var c = W.$createFilterCommandReturnHandler(
              'api.ApplyCategoricalFilterCommand',
              e,
              l,
            );
            return this.sendCommand(Object).call(this, u, c), l.get_promise();
          },
          $applyRangeFilterInternalAsync: function (e, i) {
            if (
              (this.$verifyActiveSheetOrEmbeddedInActiveDashboard(),
              M.isNullOrEmpty(e))
            )
              throw U.createNullOrEmptyParameter('fieldName');
            if (t.isNullOrUndefined(i))
              throw U.createNullOrEmptyParameter('filterOptions');
            var n = {};
            if (((n['api.fieldCaption'] = e), t.isValue(i.min)))
              if (M.isDate(i.min)) {
                var a = t.cast(i.min, t.JsDate);
                if (!M.isDateValid(a))
                  throw U.createInvalidDateParameter('filterOptions.min');
                n['api.filterRangeMin'] = M.serializeDateForServer(a);
              } else n['api.filterRangeMin'] = i.min;
            if (t.isValue(i.max))
              if (M.isDate(i.max)) {
                var s = t.cast(i.max, t.JsDate);
                if (!M.isDateValid(s))
                  throw U.createInvalidDateParameter('filterOptions.max');
                n['api.filterRangeMax'] = M.serializeDateForServer(s);
              } else n['api.filterRangeMax'] = i.max;
            t.isValue(i.nullOption) &&
              (n['api.filterRangeNullOption'] = i.nullOption),
              this.$addVisualIdToCommand(n);
            var o = new r._Deferred(),
              l = W.$createFilterCommandReturnHandler(
                'api.ApplyRangeFilterCommand',
                e,
                o,
              );
            return this.sendCommand(Object).call(this, n, l), o.get_promise();
          },
          $applyRelativeDateFilterInternalAsync: function (e, i) {
            if (
              (this.$verifyActiveSheetOrEmbeddedInActiveDashboard(),
              M.isNullOrEmpty(e))
            )
              throw U.createInvalidParameter('fieldName');
            if (t.isNullOrUndefined(i))
              throw U.createInvalidParameter('filterOptions');
            var n = {};
            if (((n['api.fieldCaption'] = e), t.isValue(i))) {
              if (
                ((n['api.filterPeriodType'] = i.periodType),
                (n['api.filterDateRangeType'] = i.rangeType),
                'lastn' === i.rangeType || 'nextn' === i.rangeType)
              ) {
                if (t.isNullOrUndefined(i.rangeN))
                  throw U.create(
                    'missingRangeNForRelativeDateFilters',
                    'Missing rangeN field for a relative date filter of LASTN or NEXTN.',
                  );
                n['api.filterDateRange'] = i.rangeN;
              }
              t.isValue(i.anchorDate) &&
                (n['api.filterDateArchorValue'] = M.serializeDateForServer(
                  i.anchorDate,
                ));
            }
            this.$addVisualIdToCommand(n);
            var a = new r._Deferred(),
              s = W.$createFilterCommandReturnHandler(
                'api.ApplyRelativeDateFilterCommand',
                e,
                a,
              );
            return this.sendCommand(Object).call(this, n, s), a.get_promise();
          },
          $applyHierarchicalFilterInternalAsync: function (e, i, n, a) {
            if (
              (this.$verifyActiveSheetOrEmbeddedInActiveDashboard(),
              M.isNullOrEmpty(e))
            )
              throw U.createNullOrEmptyParameter('fieldName');
            n = $.$normalizeEnum(Z).call(null, n, 'updateType');
            var s = null,
              o = null;
            if (k.isArray(i)) {
              s = [];
              for (var l = i, u = 0; u < l.length; u++) s.push(l[u].toString());
            } else if (M.isString(i)) (s = []).push(i.toString());
            else if (t.isValue(i) && t.isValue(i.levels)) {
              var c = i.levels;
              if (((o = []), k.isArray(c)))
                for (var h = c, m = 0; m < h.length; m++)
                  o.push(h[m].toString());
              else o.push(c.toString());
            } else if (t.isValue(i)) throw U.createInvalidParameter('values');
            var d = {};
            (d['api.fieldCaption'] = e),
              (d['api.filterUpdateType'] = n),
              (d['api.exclude'] = !(!t.isValue(a) || !a.isExcludeMode)),
              t.isValue(s) &&
                (d['api.filterHierarchicalValues'] = JSON.stringify(s)),
              t.isValue(o) &&
                (d['api.filterHierarchicalLevels'] = JSON.stringify(o)),
              this.$addVisualIdToCommand(d);
            var p = new r._Deferred(),
              f = W.$createFilterCommandReturnHandler(
                'api.ApplyHierarchicalFilterCommand',
                e,
                p,
              );
            return this.sendCommand(Object).call(this, d, f), p.get_promise();
          },
          get_selectedMarks: function () {
            return this.$selectedMarks;
          },
          set_selectedMarks: function (e) {
            this.$selectedMarks = e;
          },
          $clearSelectedMarksAsync: function () {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var e = new r._Deferred(),
              i = {};
            this.$addVisualIdToCommand(i);
            var n = new (t.makeGenericType(ue, [Object]))(
              'api.ClearSelectedMarksCommand',
              1,
              function (t) {
                e.resolve();
              },
              function (t, i) {
                e.reject(U.createServerError(i));
              },
            );
            return this.sendCommand(Object).call(this, i, n), e.get_promise();
          },
          $selectMarksAsync: function (e, i, n) {
            return (
              this.$verifyActiveSheetOrEmbeddedInActiveDashboard(),
              t.isNullOrUndefined(e) && t.isNullOrUndefined(i)
                ? this.$clearSelectedMarksAsync()
                : M.isString(e) &&
                  (k.isArray(i) ||
                    M.isString(i) ||
                    !$.$isValidEnum(re).call(null, i))
                ? this.$selectMarksWithFieldNameAndValueAsync(
                    t.cast(e, String),
                    i,
                    n,
                  )
                : k.isArray(e)
                ? this.$selectMarksWithMarksArrayAsync(e, t.cast(i, String))
                : this.$selectMarksWithMultiDimOptionAsync(e, t.cast(i, String))
            );
          },
          $getSelectedMarksAsync: function () {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var e = new r._Deferred(),
              i = {};
            this.$addVisualIdToCommand(i);
            var n = new (t.makeGenericType(ue, [Object]))(
              'api.FetchSelectedMarksCommand',
              0,
              t.mkdel(this, function (t) {
                (this.$selectedMarks = d.$processActiveMarks(t)),
                  e.resolve(this.$selectedMarks._toApiCollection());
              }),
              function (t, i) {
                e.reject(U.createServerError(i));
              },
            );
            return this.sendCommand(Object).call(this, i, n), e.get_promise();
          },
          $selectMarksWithFieldNameAndValueAsync: function (e, t, i) {
            var n = [],
              r = [],
              a = [],
              s = [],
              o = [],
              l = [];
            return (
              this.$parseMarksParam(n, r, a, s, o, l, e, t),
              this.$selectMarksWithValuesAsync(null, n, r, a, s, o, l, i)
            );
          },
          $selectMarksWithMultiDimOptionAsync: function (e, i) {
            var n = e,
              r = [],
              a = [],
              s = [],
              o = [],
              l = [],
              u = [],
              c = new t.ObjectEnumerator(n);
            try {
              for (; c.moveNext(); ) {
                var h = c.current();
                e.hasOwnProperty(h.key) &&
                  (k.isFunction(n[h.key]) ||
                    this.$parseMarksParam(r, a, s, o, l, u, h.key, h.value));
              }
            } finally {
              c.dispose();
            }
            return this.$selectMarksWithValuesAsync(null, r, a, s, o, l, u, i);
          },
          $selectMarksWithMarksArrayAsync: function (e, i) {
            for (
              var n = [], r = [], a = [], s = [], o = [], l = [], u = [], c = 0;
              c < e.length;
              c++
            ) {
              var h = e[c];
              if (
                t.isValue(h.$impl.get_$tupleId()) &&
                h.$impl.get_$tupleId() > 0
              )
                u.push(h.$impl.get_$tupleId());
              else
                for (
                  var m = h.$impl.get_$pairs(), d = 0;
                  d < m.get__length();
                  d++
                ) {
                  var p = m.get_item(d);
                  p.hasOwnProperty('fieldName') &&
                    p.hasOwnProperty('value') &&
                    !k.isFunction(p.fieldName) &&
                    !k.isFunction(p.value) &&
                    this.$parseMarksParam(
                      n,
                      r,
                      a,
                      s,
                      o,
                      l,
                      p.fieldName,
                      p.value,
                    );
                }
            }
            return this.$selectMarksWithValuesAsync(u, n, r, a, s, o, l, i);
          },
          $parseMarksParam: function (e, i, n, r, a, s, o, l) {
            var u = l;
            if (W.$regexHierarchicalFieldName.test(o))
              this.$addToParamLists(n, r, o, l);
            else if (t.isValue(u.min) || t.isValue(u.max)) {
              var c = new Object();
              if (t.isValue(u.min))
                if (M.isDate(u.min)) {
                  var h = t.cast(u.min, t.JsDate);
                  if (!M.isDateValid(h))
                    throw U.createInvalidDateParameter('options.min');
                  c.min = M.serializeDateForServer(h);
                } else c.min = u.min;
              if (t.isValue(u.max))
                if (M.isDate(u.max)) {
                  var m = t.cast(u.max, t.JsDate);
                  if (!M.isDateValid(m))
                    throw U.createInvalidDateParameter('options.max');
                  c.max = M.serializeDateForServer(m);
                } else c.max = u.max;
              if (t.isValue(u.nullOption)) {
                var d = $.$normalizeEnum(ee).call(
                  null,
                  u.nullOption,
                  'options.nullOption',
                );
                c.nullOption = d;
              } else c.nullOption = 'allValues';
              var p = JSON.stringify(c);
              this.$addToParamLists(a, s, o, p);
            } else this.$addToParamLists(e, i, o, l);
          },
          $addToParamLists: function (e, i, n, r) {
            var a = [];
            if (k.isArray(r))
              for (var s = t.cast(r, Array), o = 0; o < s.length; o++)
                a.push(s[o].toString());
            else a.push(r.toString());
            i.push(a), e.push(n);
          },
          $selectMarksWithValuesAsync: function (e, i, n, a, s, o, l, u) {
            var c = {};
            if (
              (this.$addVisualIdToCommand(c),
              (u = $.$normalizeEnum(re).call(null, u, 'updateType')),
              (c['api.filterUpdateType'] = u),
              M.isNullOrEmpty(e) || (c['api.tupleIds'] = JSON.stringify(e)),
              !M.isNullOrEmpty(i) && !M.isNullOrEmpty(n))
            ) {
              c['api.categoricalFieldCaption'] = JSON.stringify(i);
              for (var h = [], m = 0; m < n.length; m++) {
                var d = JSON.stringify(n[m]);
                h.push(d);
              }
              c['api.categoricalMarkValues'] = JSON.stringify(h);
            }
            if (!M.isNullOrEmpty(a) && !M.isNullOrEmpty(s)) {
              c['api.hierarchicalFieldCaption'] = JSON.stringify(a);
              for (var p = [], f = 0; f < s.length; f++) {
                var g = JSON.stringify(s[f]);
                p.push(g);
              }
              c['api.hierarchicalMarkValues'] = JSON.stringify(p);
            }
            if (!M.isNullOrEmpty(o) && !M.isNullOrEmpty(l)) {
              c['api.rangeFieldCaption'] = JSON.stringify(o);
              for (var _ = [], v = 0; v < l.length; v++) {
                var y = JSON.stringify(l[v]);
                _.push(y);
              }
              c['api.rangeMarkValues'] = JSON.stringify(_);
            }
            if (
              M.isNullOrEmpty(c['api.tupleIds']) &&
              M.isNullOrEmpty(c['api.categoricalFieldCaption']) &&
              M.isNullOrEmpty(c['api.hierarchicalFieldCaption']) &&
              M.isNullOrEmpty(c['api.rangeFieldCaption'])
            )
              throw U.createInvalidParameter('fieldNameOrFieldValuesMap');
            var w = new r._Deferred(),
              S = new (t.makeGenericType(ue, [Object]))(
                'api.SelectMarksCommand',
                1,
                function (e) {
                  var i = W.$createSelectionCommandError(e);
                  t.isNullOrUndefined(i) ? w.resolve() : w.reject(i);
                },
                function (e, t) {
                  w.reject(U.createServerError(t));
                },
              );
            return this.sendCommand(Object).call(this, c, S), w.get_promise();
          },
          $getSummaryDataAsync: function (e) {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var i = new r._Deferred(),
              n = {};
            this.$addVisualIdToCommand(n),
              (e = e || new Object()),
              (n['api.ignoreAliases'] = t.coalesce(e.ignoreAliases, !1)),
              (n['api.ignoreSelection'] = t.coalesce(e.ignoreSelection, !1)),
              (n['api.maxRows'] = t.coalesce(e.maxRows, 0));
            var a = new (t.makeGenericType(ue, [Object]))(
              'api.GetSummaryTableCommand',
              0,
              function (e) {
                var t = A.processGetDataPresModel(e);
                i.resolve(t);
              },
              function (e, t) {
                i.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, n, a), i.get_promise();
          },
          $getUnderlyingDataAsync: function (e) {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var i = new r._Deferred(),
              n = {};
            this.$addVisualIdToCommand(n),
              (e = e || new Object()),
              (n['api.ignoreAliases'] = t.coalesce(e.ignoreAliases, !1)),
              (n['api.ignoreSelection'] = t.coalesce(e.ignoreSelection, !1)),
              (n['api.includeAllColumns'] = t.coalesce(
                e.includeAllColumns,
                !1,
              )),
              (n['api.maxRows'] = t.coalesce(e.maxRows, 0));
            var a = new (t.makeGenericType(ue, [Object]))(
              'api.GetUnderlyingTableCommand',
              0,
              function (e) {
                var t = A.processGetDataPresModel(e);
                i.resolve(t);
              },
              function (e, t) {
                i.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, n, a), i.get_promise();
          },
          $clearHighlightedMarksAsync: function () {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var e = new r._Deferred(),
              i = {};
            this.$addVisualIdToCommand(i);
            var n = new (t.makeGenericType(ue, [Object]))(
              'api.ClearHighlightedMarksCommand',
              1,
              function (t) {
                e.resolve();
              },
              function (t, i) {
                e.reject(U.createServerError(i));
              },
            );
            return this.sendCommand(Object).call(this, i, n), e.get_promise();
          },
          $highlightMarksAsync: function (e, i) {
            T.verifyString(e, 'fieldName'),
              this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var n = new r._Deferred(),
              a = {};
            (a['api.fieldCaption'] = e),
              (a['api.ObjectTextIDs'] = i),
              this.$addVisualIdToCommand(a);
            var s = new (t.makeGenericType(ue, [Object]))(
              'api.HighlightMarksCommand',
              0,
              function (e) {
                n.resolve();
              },
              function (e, t) {
                n.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, a, s), n.get_promise();
          },
          $highlightMarksByPatternMatchAsync: function (e, i) {
            T.verifyString(e, 'fieldName'),
              T.verifyString(i, 'patternMatch'),
              this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var n = new r._Deferred(),
              a = { 'api.filterUpdateType': 'replace' };
            (a['api.fieldCaption'] = e),
              (a['api.Pattern'] = i),
              this.$addVisualIdToCommand(a);
            var s = new (t.makeGenericType(ue, [Object]))(
              'api.HighlightMarksByPatternMatch',
              0,
              function (e) {
                n.resolve();
              },
              function (e, t) {
                n.reject(U.createServerError(t));
              },
            );
            return this.sendCommand(Object).call(this, a, s), n.get_promise();
          },
          $getHighlightedMarksAsync: function () {
            this.$verifyActiveSheetOrEmbeddedInActiveDashboard();
            var e = new r._Deferred(),
              i = {};
            this.$addVisualIdToCommand(i);
            var n = new (t.makeGenericType(ue, [Object]))(
              'api.FetchHighlightedMarksCommand',
              0,
              t.mkdel(this, function (t) {
                (this.highlightedMarks = d.$processActiveMarks(t)),
                  e.resolve(this.highlightedMarks._toApiCollection());
              }),
              function (t, i) {
                e.reject(U.createServerError(i));
              },
            );
            return this.sendCommand(Object).call(this, i, n), e.get_promise();
          },
        },
        D,
      ),
      t.initEnum(
        q,
        a,
        {
          blank: 'blank',
          worksheet: 'worksheet',
          quickFilter: 'quickFilter',
          parameterControl: 'parameterControl',
          pageFilter: 'pageFilter',
          legend: 'legend',
          title: 'title',
          text: 'text',
          image: 'image',
          webPage: 'webPage',
        },
        !0,
      ),
      t.initEnum(
        G,
        a,
        {
          last: 'last',
          lastn: 'lastn',
          next: 'next',
          nextn: 'nextn',
          curr: 'curr',
          todate: 'todate',
        },
        !0,
      ),
      t.initEnum(
        K,
        a,
        {
          default: 'default',
          desktop: 'desktop',
          tablet: 'tablet',
          phone: 'phone',
        },
        !0,
      ),
      t.initClass(B, a, {}),
      t.initEnum(
        Q,
        a,
        {
          internalError: 'internalError',
          serverError: 'serverError',
          invalidAggregationFieldName: 'invalidAggregationFieldName',
          invalidParameter: 'invalidParameter',
          invalidUrl: 'invalidUrl',
          staleDataReference: 'staleDataReference',
          vizAlreadyInManager: 'vizAlreadyInManager',
          noUrlOrParentElementNotFound: 'noUrlOrParentElementNotFound',
          invalidFilterFieldName: 'invalidFilterFieldName',
          invalidFilterFieldValue: 'invalidFilterFieldValue',
          invalidFilterFieldNameOrValue: 'invalidFilterFieldNameOrValue',
          filterCannotBePerformed: 'filterCannotBePerformed',
          notActiveSheet: 'notActiveSheet',
          invalidCustomViewName: 'invalidCustomViewName',
          missingRangeNForRelativeDateFilters:
            'missingRangeNForRelativeDateFilters',
          missingMaxSize: 'missingMaxSize',
          missingMinSize: 'missingMinSize',
          missingMinMaxSize: 'missingMinMaxSize',
          invalidSize: 'invalidSize',
          invalidSizeBehaviorOnWorksheet: 'invalidSizeBehaviorOnWorksheet',
          sheetNotInWorkbook: 'sheetNotInWorkbook',
          indexOutOfRange: 'indexOutOfRange',
          downloadWorkbookNotAllowed: 'downloadWorkbookNotAllowed',
          nullOrEmptyParameter: 'nullOrEmptyParameter',
          browserNotCapable: 'browserNotCapable',
          unsupportedEventName: 'unsupportedEventName',
          invalidDateParameter: 'invalidDateParameter',
          invalidSelectionFieldName: 'invalidSelectionFieldName',
          invalidSelectionValue: 'invalidSelectionValue',
          invalidSelectionDate: 'invalidSelectionDate',
          noUrlForHiddenWorksheet: 'noUrlForHiddenWorksheet',
          maxVizResizeAttempts: 'maxVizResizeAttempts',
        },
        !0,
      ),
      t.initEnum(
        J,
        a,
        {
          SUM: 'SUM',
          AVG: 'AVG',
          MIN: 'MIN',
          MAX: 'MAX',
          STDEV: 'STDEV',
          STDEVP: 'STDEVP',
          VAR: 'VAR',
          VARP: 'VARP',
          COUNT: 'COUNT',
          COUNTD: 'COUNTD',
          MEDIAN: 'MEDIAN',
          ATTR: 'ATTR',
          NONE: 'NONE',
          PERCENTILE: 'PERCENTILE',
          YEAR: 'YEAR',
          QTR: 'QTR',
          MONTH: 'MONTH',
          DAY: 'DAY',
          HOUR: 'HOUR',
          MINUTE: 'MINUTE',
          SECOND: 'SECOND',
          WEEK: 'WEEK',
          WEEKDAY: 'WEEKDAY',
          MONTHYEAR: 'MONTHYEAR',
          MDY: 'MDY',
          END: 'END',
          TRUNC_YEAR: 'TRUNC_YEAR',
          TRUNC_QTR: 'TRUNC_QTR',
          TRUNC_MONTH: 'TRUNC_MONTH',
          TRUNC_WEEK: 'TRUNC_WEEK',
          TRUNC_DAY: 'TRUNC_DAY',
          TRUNC_HOUR: 'TRUNC_HOUR',
          TRUNC_MINUTE: 'TRUNC_MINUTE',
          TRUNC_SECOND: 'TRUNC_SECOND',
          QUART1: 'QUART1',
          QUART3: 'QUART3',
          SKEWNESS: 'SKEWNESS',
          KURTOSIS: 'KURTOSIS',
          INOUT: 'INOUT',
          SUM_XSQR: 'SUM_XSQR',
          USER: 'USER',
        },
        !0,
      ),
      t.initEnum(
        Y,
        a,
        { dimension: 'dimension', measure: 'measure', unknown: 'unknown' },
        !0,
      ),
      t.initEnum(
        X,
        a,
        {
          categorical: 'categorical',
          quantitative: 'quantitative',
          hierarchical: 'hierarchical',
          relativedate: 'relativedate',
        },
        !0,
      ),
      t.initEnum(
        Z,
        a,
        { all: 'all', replace: 'replace', add: 'add', remove: 'remove' },
        !0,
      ),
      t.initEnum(
        ee,
        a,
        {
          nullValues: 'nullValues',
          nonNullValues: 'nonNullValues',
          allValues: 'allValues',
        },
        !0,
      ),
      t.initEnum(te, a, { all: 'all', list: 'list', range: 'range' }, !0),
      t.initEnum(
        ie,
        a,
        {
          float: 'float',
          integer: 'integer',
          string: 'string',
          boolean: 'boolean',
          date: 'date',
          datetime: 'datetime',
        },
        !0,
      ),
      t.initEnum(
        ne,
        a,
        {
          year: 'year',
          quarter: 'quarter',
          month: 'month',
          week: 'week',
          day: 'day',
          hour: 'hour',
          minute: 'minute',
          second: 'second',
        },
        !0,
      ),
      t.initEnum(
        re,
        a,
        { replace: 'replace', add: 'add', remove: 'remove' },
        !0,
      ),
      t.initEnum(
        ae,
        a,
        {
          automatic: 'automatic',
          exactly: 'exactly',
          range: 'range',
          atleast: 'atleast',
          atmost: 'atmost',
        },
        !0,
      ),
      t.initEnum(
        se,
        a,
        { worksheet: 'worksheet', dashboard: 'dashboard', story: 'story' },
        !0,
      ),
      t.initEnum(
        oe,
        a,
        {
          customviewload: 'customviewload',
          customviewremove: 'customviewremove',
          customviewsave: 'customviewsave',
          customviewsetdefault: 'customviewsetdefault',
          filterchange: 'filterchange',
          firstinteractive: 'firstinteractive',
          firstvizsizeknown: 'firstvizsizeknown',
          marksselection: 'marksselection',
          markshighlight: 'markshighlight',
          parametervaluechange: 'parametervaluechange',
          storypointswitch: 'storypointswitch',
          tabswitch: 'tabswitch',
          vizresize: 'vizresize',
        },
        !0,
      ),
      t.initEnum(le, a, { top: 'top', bottom: 'bottom' }, !0),
      t.initClass(ce, a, {
        get_router: function () {
          return this.$router;
        },
        get_handler: function () {
          return this.$handler;
        },
        sendCommand: function (e) {
          return function (t, i) {
            this.$router.sendCommand(e).call(this.$router, this.$handler, t, i);
          };
        },
      }),
      t.initClass(Ae, a, {
        getViz: function () {
          return this.$viz;
        },
        getEventName: function () {
          return this.$eventName;
        },
      }),
      t.initClass(
        he,
        a,
        {
          getCustomViewAsync: function () {
            var e = new r._Deferred(),
              i = null;
            return (
              t.isValue(this.$context.get__customViewImpl()) &&
                (i = this.$context.get__customViewImpl().get_$customView()),
              e.resolve(i),
              e.get_promise()
            );
          },
        },
        Ae,
      ),
      t.initEnum(
        me,
        a,
        {
          float: 'float',
          integer: 'integer',
          string: 'string',
          boolean: 'boolean',
          date: 'date',
          datetime: 'datetime',
        },
        !0,
      ),
      t.initClass(de, a, {}, Object),
      t.initClass(
        Fe,
        a,
        {
          getWorksheet: function () {
            return this.$worksheetImpl.get_worksheet();
          },
        },
        Ae,
      ),
      t.initClass(
        fe,
        a,
        {
          getFieldName: function () {
            return this.$filterCaption;
          },
          getFilterAsync: function () {
            return this.$context
              .get__worksheetImpl()
              .$getFilterAsync(
                this.$context.get__filterFieldName(),
                null,
                null,
              );
          },
        },
        Fe,
      ),
      t.initClass(
        ge,
        a,
        {
          getVizSize: function () {
            return this.$vizSize;
          },
        },
        Ae,
      ),
      t.initClass(
        $e,
        a,
        {
          getHighlightedMarksAsync: function () {
            return this.$context
              .get__worksheetImpl()
              .$getHighlightedMarksAsync();
          },
        },
        Fe,
      ),
      t.initClass(
        ye,
        a,
        {
          getMarksAsync: function () {
            var e = this.$context.get__worksheetImpl();
            return t.isValue(e.get_selectedMarks())
              ? new r._Deferred().resolve(
                  e.get_selectedMarks()._toApiCollection(),
                )
              : e.$getSelectedMarksAsync();
          },
        },
        Fe,
      ),
      t.initClass(
        we,
        a,
        {
          getParameterName: function () {
            return this.$context.get__parameterName();
          },
          getParameterAsync: function () {
            return this.$context
              .get__workbookImpl()
              .$getSingleParameterAsync(this.$context.get__parameterName());
          },
        },
        Ae,
      ),
      t.initClass(Se, a, {}, Object),
      t.initClass(be, a, {}, Object),
      t.initClass(Ie, a, {}),
      t.initClass(Ce, a, {}, Object),
      t.initClass(Ne, a, {}),
      t.initClass(
        Ee,
        a,
        {
          getOldStoryPointInfo: function () {
            return this.$oldStoryPointInfo;
          },
          getNewStoryPoint: function () {
            return this.$newStoryPoint;
          },
        },
        Ae,
      ),
      t.initClass(
        Ve,
        a,
        {
          getOldSheetName: function () {
            return this.$oldName;
          },
          getNewSheetName: function () {
            return this.$newName;
          },
        },
        Ae,
      ),
      t.initClass(
        ke,
        a,
        {
          add_customViewsListLoad: function (e) {
            this.$1$CustomViewsListLoadField = t.delegateCombine(
              this.$1$CustomViewsListLoadField,
              e,
            );
          },
          remove_customViewsListLoad: function (e) {
            this.$1$CustomViewsListLoadField = t.delegateRemove(
              this.$1$CustomViewsListLoadField,
              e,
            );
          },
          add_stateReadyForQuery: function (e) {
            this.$1$StateReadyForQueryField = t.delegateCombine(
              this.$1$StateReadyForQueryField,
              e,
            );
          },
          remove_stateReadyForQuery: function (e) {
            this.$1$StateReadyForQueryField = t.delegateRemove(
              this.$1$StateReadyForQueryField,
              e,
            );
          },
          add_$marksSelection: function (e) {
            this.$1$MarksSelectionField = t.delegateCombine(
              this.$1$MarksSelectionField,
              e,
            );
          },
          remove_$marksSelection: function (e) {
            this.$1$MarksSelectionField = t.delegateRemove(
              this.$1$MarksSelectionField,
              e,
            );
          },
          add_$marksHighlight: function (e) {
            this.$1$MarksHighlightField = t.delegateCombine(
              this.$1$MarksHighlightField,
              e,
            );
          },
          remove_$marksHighlight: function (e) {
            this.$1$MarksHighlightField = t.delegateRemove(
              this.$1$MarksHighlightField,
              e,
            );
          },
          add_$filterChange: function (e) {
            this.$1$FilterChangeField = t.delegateCombine(
              this.$1$FilterChangeField,
              e,
            );
          },
          remove_$filterChange: function (e) {
            this.$1$FilterChangeField = t.delegateRemove(
              this.$1$FilterChangeField,
              e,
            );
          },
          add_$parameterValueChange: function (e) {
            this.$1$ParameterValueChangeField = t.delegateCombine(
              this.$1$ParameterValueChangeField,
              e,
            );
          },
          remove_$parameterValueChange: function (e) {
            this.$1$ParameterValueChangeField = t.delegateRemove(
              this.$1$ParameterValueChangeField,
              e,
            );
          },
          add_$customViewLoad: function (e) {
            this.$1$CustomViewLoadField = t.delegateCombine(
              this.$1$CustomViewLoadField,
              e,
            );
          },
          remove_$customViewLoad: function (e) {
            this.$1$CustomViewLoadField = t.delegateRemove(
              this.$1$CustomViewLoadField,
              e,
            );
          },
          add_$customViewSave: function (e) {
            this.$1$CustomViewSaveField = t.delegateCombine(
              this.$1$CustomViewSaveField,
              e,
            );
          },
          remove_$customViewSave: function (e) {
            this.$1$CustomViewSaveField = t.delegateRemove(
              this.$1$CustomViewSaveField,
              e,
            );
          },
          add_$customViewRemove: function (e) {
            this.$1$CustomViewRemoveField = t.delegateCombine(
              this.$1$CustomViewRemoveField,
              e,
            );
          },
          remove_$customViewRemove: function (e) {
            this.$1$CustomViewRemoveField = t.delegateRemove(
              this.$1$CustomViewRemoveField,
              e,
            );
          },
          add_$customViewSetDefault: function (e) {
            this.$1$CustomViewSetDefaultField = t.delegateCombine(
              this.$1$CustomViewSetDefaultField,
              e,
            );
          },
          remove_$customViewSetDefault: function (e) {
            this.$1$CustomViewSetDefaultField = t.delegateRemove(
              this.$1$CustomViewSetDefaultField,
              e,
            );
          },
          add_$tabSwitch: function (e) {
            this.$1$TabSwitchField = t.delegateCombine(
              this.$1$TabSwitchField,
              e,
            );
          },
          remove_$tabSwitch: function (e) {
            this.$1$TabSwitchField = t.delegateRemove(
              this.$1$TabSwitchField,
              e,
            );
          },
          add_$storyPointSwitch: function (e) {
            this.$1$StoryPointSwitchField = t.delegateCombine(
              this.$1$StoryPointSwitchField,
              e,
            );
          },
          remove_$storyPointSwitch: function (e) {
            this.$1$StoryPointSwitchField = t.delegateRemove(
              this.$1$StoryPointSwitchField,
              e,
            );
          },
          add_$vizResize: function (e) {
            this.$1$VizResizeField = t.delegateCombine(
              this.$1$VizResizeField,
              e,
            );
          },
          remove_$vizResize: function (e) {
            this.$1$VizResizeField = t.delegateRemove(
              this.$1$VizResizeField,
              e,
            );
          },
          get_hostId: function () {
            return this.$parameters.hostId;
          },
          set_hostId: function (e) {
            this.$parameters.hostId = e;
          },
          get_iframe: function () {
            return this.$iframe;
          },
          get_instanceId: function () {
            return this.$instanceId;
          },
          set_instanceId: function (e) {
            this.$instanceId = e;
          },
          get_$viz: function () {
            return this.$viz;
          },
          get_$areTabsHidden: function () {
            return this.$areTabsHidden;
          },
          get_$isToolbarHidden: function () {
            return this.$isToolbarHidden;
          },
          get_$isHidden: function () {
            return 'none' === this.$iframe.style.display;
          },
          get_$parentElement: function () {
            return this.$parameters.parentElement;
          },
          get_$url: function () {
            return this.$parameters.get_baseUrl();
          },
          get_$workbook: function () {
            return this.$workbookImpl.get_workbook();
          },
          get__workbookImpl: function () {
            return this.$workbookImpl;
          },
          get_$areAutomaticUpdatesPaused: function () {
            return this.$areAutomaticUpdatesPaused;
          },
          get_$vizSize: function () {
            return this.$vizSize;
          },
          getCurrentUrlAsync: function () {
            var e = new r._Deferred(),
              i = new (t.makeGenericType(ue, [String]))(
                'api.GetCurrentUrlCommand',
                0,
                function (t) {
                  e.resolve(t);
                },
                function (t, i) {
                  e.reject(U.createInternalError(i));
                },
              );
            return (
              this._sendCommand(String).call(this, null, i), e.get_promise()
            );
          },
          handleVizListening: function () {
            this.$enableVisibleRectCommunication();
          },
          handleVizLoad: function () {
            t.isNullOrUndefined(this.$vizSize) &&
              (this.$setFrameSize(
                this.$initialAvailableSize.width + 'px',
                this.$initialAvailableSize.height + 'px',
              ),
              this.$show()),
              t.isValue(this.$staticImage) &&
                (this.$staticImage.style.display = 'none'),
              t.isNullOrUndefined(this.$workbookImpl)
                ? (this.$workbookImpl = new j(
                    this,
                    this.$messagingOptions,
                    t.mkdel(this, function () {
                      this.$onWorkbookInteractive(null);
                    }),
                  ))
                : this.$initializingWorkbookImpl ||
                  this.$workbookImpl._update(
                    t.mkdel(this, function () {
                      this.$onWorkbookInteractive(null);
                    }),
                  );
          },
          $calculateFrameSize: function (e) {
            var t,
              i,
              n,
              r,
              a = this.$vizSize.chromeHeight,
              s = this.$vizSize.sheetSize,
              o = 0,
              l = 0;
            if ('exactly' === s.behavior)
              (o = s.maxSize.width), (l = s.maxSize.height + a);
            else
              switch (s.behavior) {
                case 'range':
                  (t = s.minSize.width),
                    (i = s.maxSize.width),
                    (n = s.minSize.height + a),
                    (r = s.maxSize.height + a),
                    (o = Math.max(t, Math.min(i, e.width))),
                    (l = Math.max(n, Math.min(r, e.height)));
                  break;
                case 'atleast':
                  (t = s.minSize.width),
                    (n = s.minSize.height + a),
                    (o = Math.max(t, e.width)),
                    (l = Math.max(n, e.height));
                  break;
                case 'atmost':
                  (i = s.maxSize.width),
                    (r = s.maxSize.height + a),
                    (o = Math.min(i, e.width)),
                    (l = Math.min(r, e.height));
                  break;
                case 'automatic':
                  (o = e.width), (l = Math.max(e.height, a));
                  break;
                default:
                  throw U.createInternalError(
                    'Unknown SheetSizeBehavior for viz: ' +
                      s.behavior.toString(),
                  );
              }
            return Ce.$ctor(o, l);
          },
          $getNewFrameSize: function () {
            var e;
            return (
              t.isValue(this.$initialAvailableSize)
                ? ((e = this.$initialAvailableSize),
                  (this.$initialAvailableSize = null))
                : (e = M.computeContentSize(this.get_$parentElement())),
              this.$raiseVizResizeEvent(e),
              this.$calculateFrameSize(e)
            );
          },
          $refreshSize: function () {
            if (t.isValue(this.$vizSize)) {
              var e = this.$getNewFrameSize();
              if (e.height !== this.$vizSize.chromeHeight) {
                this.$setFrameSize(e.width + 'px', e.height + 'px');
                for (var i = 0; i < 10; i++) {
                  var n = this.$getNewFrameSize();
                  if (t.referenceEquals(JSON.stringify(e), JSON.stringify(n)))
                    return;
                  (e = n), this.$setFrameSize(e.width + 'px', e.height + 'px');
                }
                throw U.create(
                  'maxVizResizeAttempts',
                  'Viz resize limit hit. The calculated iframe size did not stabilize after 10 resizes.',
                );
              }
            }
          },
          handleEventNotification: function (e, t) {
            var i = w.deserialize(t);
            switch (e) {
              case 'api.FirstVizSizeKnownEvent':
                this.$handleFirstVizSizeKnownEvent(i);
                break;
              case 'api.VizInteractiveEvent':
                this.$handleVizInteractiveEvent(i);
                break;
              case 'api.MarksSelectionChangedEvent':
                this.$handleMarksSelectionChangedEvent(i);
                break;
              case 'api.MarksHighlightChangedEvent':
                this.$handleMarksHighlightChangedEvent(i);
                break;
              case 'api.FilterChangedEvent':
                this.$handleFilterChangedEvent(i);
                break;
              case 'api.ParameterChangedEvent':
                this.$handleParameterChangedEvent(i);
                break;
              case 'api.CustomViewsListLoadedEvent':
                this.$handleCustomViewsListLoadedEvent(i);
                break;
              case 'api.CustomViewUpdatedEvent':
                this.$handleCustomViewUpdatedEvent(i);
                break;
              case 'api.CustomViewRemovedEvent':
                this.$handleCustomViewRemovedEvent();
                break;
              case 'api.CustomViewSetDefaultEvent':
                this.$handleCustomViewSetDefaultEvent(i);
                break;
              case 'api.TabSwitchEvent':
                this.$handleTabSwitchEvent(i);
                break;
              case 'api.StorytellingStateChangedEvent':
                this.$handleStorytellingStateChangedEvent(i);
                break;
            }
          },
          addEventListener: function (e, i) {
            var n = {};
            if (!$.$tryNormalizeEnum(oe).call(null, e, n))
              throw U.createUnsupportedEventName(e.toString());
            switch (n.$) {
              case 'marksselection':
                this.add_$marksSelection(t.cast(i, Function));
                break;
              case 'markshighlight':
                this.add_$marksHighlight(t.cast(i, Function));
                break;
              case 'parametervaluechange':
                this.add_$parameterValueChange(t.cast(i, Function));
                break;
              case 'filterchange':
                this.add_$filterChange(t.cast(i, Function));
                break;
              case 'customviewload':
                this.add_$customViewLoad(t.cast(i, Function));
                break;
              case 'customviewsave':
                this.add_$customViewSave(t.cast(i, Function));
                break;
              case 'customviewremove':
                this.add_$customViewRemove(t.cast(i, Function));
                break;
              case 'customviewsetdefault':
                this.add_$customViewSetDefault(t.cast(i, Function));
                break;
              case 'tabswitch':
                this.add_$tabSwitch(t.cast(i, Function));
                break;
              case 'storypointswitch':
                this.add_$storyPointSwitch(t.cast(i, Function));
                break;
              case 'vizresize':
                this.add_$vizResize(t.cast(i, Function));
                break;
            }
          },
          removeEventListener: function (e, i) {
            var n = {};
            if (!$.$tryNormalizeEnum(oe).call(null, e, n))
              throw U.createUnsupportedEventName(e.toString());
            switch (n.$) {
              case 'marksselection':
                this.remove_$marksSelection(t.cast(i, Function));
                break;
              case 'markshighlight':
                this.remove_$marksHighlight(t.cast(i, Function));
                break;
              case 'parametervaluechange':
                this.remove_$parameterValueChange(t.cast(i, Function));
                break;
              case 'filterchange':
                this.remove_$filterChange(t.cast(i, Function));
                break;
              case 'customviewload':
                this.remove_$customViewLoad(t.cast(i, Function));
                break;
              case 'customviewsave':
                this.remove_$customViewSave(t.cast(i, Function));
                break;
              case 'customviewremove':
                this.remove_$customViewRemove(t.cast(i, Function));
                break;
              case 'customviewsetdefault':
                this.remove_$customViewSetDefault(t.cast(i, Function));
                break;
              case 'tabswitch':
                this.remove_$tabSwitch(t.cast(i, Function));
                break;
              case 'storypointswitch':
                this.remove_$storyPointSwitch(t.cast(i, Function));
                break;
              case 'vizresize':
                this.remove_$vizResize(t.cast(i, Function));
                break;
            }
          },
          $dispose: function () {
            t.isValue(this.$iframe) &&
              (this.$iframe.parentNode.removeChild(this.$iframe),
              (this.$iframe = null)),
              L.$unregisterViz(this.$viz),
              this.$messagingOptions.get_router().unregisterHandler(this),
              this.$removeWindowResizeHandler();
          },
          $show: function () {
            (this.$iframe.style.display = 'block'),
              (this.$iframe.style.visibility = 'visible');
          },
          $hide: function () {
            this.$iframe.style.display = 'none';
          },
          $makeInvisible: function () {
            this.$iframe.style.visibility = 'hidden';
          },
          $showExportImageDialog: function () {
            this.$invokeCommand('showExportImageDialog');
          },
          $showExportDataDialog: function (e) {
            var t = this.$verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(
              e,
            );
            this.$invokeCommand('showExportDataDialog', t);
          },
          $showExportCrossTabDialog: function (e) {
            var t = this.$verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard(
              e,
            );
            this.$invokeCommand('showExportCrosstabDialog', t);
          },
          $showExportPDFDialog: function () {
            this.$invokeCommand('showExportPDFDialog');
          },
          $revertAllAsync: function () {
            var e = new r._Deferred(),
              i = new (t.makeGenericType(ue, [Object]))(
                'api.RevertAllCommand',
                1,
                function (t) {
                  e.resolve();
                },
                function (t, i) {
                  e.reject(U.createServerError(i));
                },
              );
            return (
              this._sendCommand(Object).call(this, null, i), e.get_promise()
            );
          },
          $refreshDataAsync: function () {
            var e = new r._Deferred(),
              i = new (t.makeGenericType(ue, [Object]))(
                'api.RefreshDataCommand',
                1,
                function (t) {
                  e.resolve();
                },
                function (t, i) {
                  e.reject(U.createServerError(i));
                },
              );
            return (
              this._sendCommand(Object).call(this, null, i), e.get_promise()
            );
          },
          $showShareDialog: function () {
            this.$invokeCommand('showShareDialog');
          },
          $showDownloadWorkbookDialog: function () {
            if (!this.get__workbookImpl().get_isDownloadAllowed())
              throw U.create(
                'downloadWorkbookNotAllowed',
                'Download workbook is not allowed',
              );
            this.$invokeCommand('showDownloadWorkbookDialog');
          },
          $pauseAutomaticUpdatesAsync: function () {
            return this.$invokeAutomaticUpdatesCommandAsync(
              'pauseAutomaticUpdates',
            );
          },
          $resumeAutomaticUpdatesAsync: function () {
            return this.$invokeAutomaticUpdatesCommandAsync(
              'resumeAutomaticUpdates',
            );
          },
          $toggleAutomaticUpdatesAsync: function () {
            return this.$invokeAutomaticUpdatesCommandAsync(
              'toggleAutomaticUpdates',
            );
          },
          $setFrameSizeAndUpdate: function (e, t) {
            this.$raiseVizResizeEvent(Ce.$ctor(-1, -1)),
              this.$setFrameSize(e, t),
              this.$workbookImpl._updateActiveSheetAsync();
          },
          $setAreAutomaticUpdatesPaused: function (e) {
            this.$areAutomaticUpdatesPaused = e;
          },
          $contentRootElement: function () {
            return this.$parameters.parentElement;
          },
          $create: function () {
            try {
              L.$registerViz(this.$viz);
            } catch (i) {
              var e = t.Exception.wrap(i);
              throw (this.$dispose(), e);
            }
            this.$parameters.fixedSize
              ? (this.$parameters.displayStaticImage &&
                  ((this.$staticImage = this.$createStaticImageElement(
                    Ce.$ctor(
                      parseInt(this.$parameters.width),
                      parseInt(this.$parameters.height),
                    ),
                  )),
                  (this.$staticImage.style.display = 'block')),
                (this.$iframe = this.$createIframe()),
                this.$show())
              : ((this.$initialAvailableSize = M.computeContentSize(
                  this.get_$parentElement(),
                )),
                (0 !== this.$initialAvailableSize.width &&
                  0 !== this.$initialAvailableSize.height) ||
                  (this.$initialAvailableSize = Ce.$ctor(800, 600)),
                (this.$iframe = this.$createIframe()),
                this.$makeInvisible(),
                this.$parameters.displayStaticImage &&
                  ((this.$staticImage = this.$createStaticImageElement(
                    this.$initialAvailableSize,
                  )),
                  (this.$staticImage.style.display = 'block'))),
              M.hasWindowPostMessage() ||
                (M.isIE()
                  ? (this.$iframe.onreadystatechange = this.$getOnCheckForDoneDelegate())
                  : (this.$iframe.onload = this.$getOnCheckForDoneDelegate())),
              (this.$isToolbarHidden = !this.$parameters.toolbar),
              (this.$areTabsHidden = !this.$parameters.tabs),
              this.$messagingOptions.get_router().registerHandler(this),
              (this.$iframe.src = this.$parameters.get_url());
          },
          $sendVisibleRect: function () {
            try {
              if (
                !M.hasWindowPostMessage() ||
                t.isNullOrUndefined(this.$iframe) ||
                !t.isValue(this.$iframe.contentWindow)
              )
                return;
            } catch (e) {
              return;
            }
            var e = M.visibleContentRectInDocumentCoordinates(
                this.get_iframe(),
              ),
              i = M.contentRectInDocumentCoordinates(this.get_iframe()),
              n = [];
            n.push('layoutInfoResp'.toString()),
              n.push(e.left - i.left),
              n.push(e.top - i.top),
              n.push(e.width),
              n.push(e.height),
              this.$iframe.contentWindow.postMessage(n.join(','), '*');
          },
          $enableVisibleRectCommunication: function () {
            M.hasWindowPostMessage() &&
              !t.isNullOrUndefined(this.$iframe) &&
              t.isValue(this.$iframe.contentWindow) &&
              this.$iframe.contentWindow.postMessage(
                'tableau.enableVisibleRectCommunication'.toString(),
                '*',
              );
          },
          _sendCommand: function (e) {
            return function (t, i) {
              this.$messagingOptions
                .sendCommand(e)
                .call(this.$messagingOptions, t, i);
            };
          },
          $raiseParameterValueChange: function (e) {
            t.staticEquals(this.$1$ParameterValueChangeField, null) ||
              this.$1$ParameterValueChangeField(
                new we('parametervaluechange', this.$viz, e),
              );
          },
          $raiseCustomViewLoad: function (e) {
            this.get__workbookImpl()._update(
              t.mkdel(this, function () {
                t.staticEquals(this.$1$CustomViewLoadField, null) ||
                  this.$1$CustomViewLoadField(
                    new he(
                      'customviewload',
                      this.$viz,
                      t.isValue(e) ? e._impl : null,
                    ),
                  );
              }),
            );
          },
          $raiseCustomViewSave: function (e) {
            this.get__workbookImpl()._update(
              t.mkdel(this, function () {
                t.staticEquals(this.$1$CustomViewSaveField, null) ||
                  this.$1$CustomViewSaveField(
                    new he('customviewsave', this.$viz, e._impl),
                  );
              }),
            );
          },
          $raiseCustomViewRemove: function (e) {
            t.staticEquals(this.$1$CustomViewRemoveField, null) ||
              this.$1$CustomViewRemoveField(
                new he('customviewremove', this.$viz, e._impl),
              );
          },
          $raiseCustomViewSetDefault: function (e) {
            t.staticEquals(this.$1$CustomViewSetDefaultField, null) ||
              this.$1$CustomViewSetDefaultField(
                new he('customviewsetdefault', this.$viz, e._impl),
              );
          },
          $raiseTabSwitch: function (e, i) {
            t.staticEquals(this.$1$TabSwitchField, null) ||
              this.$1$TabSwitchField(new Ve('tabswitch', this.$viz, e, i));
          },
          raiseStoryPointSwitch: function (e, i) {
            t.staticEquals(this.$1$StoryPointSwitchField, null) ||
              this.$1$StoryPointSwitchField(
                new Ee('storypointswitch', this.$viz, e, i),
              );
          },
          $raiseStateReadyForQuery: function () {
            t.staticEquals(this.$1$StateReadyForQueryField, null) ||
              this.$1$StateReadyForQueryField(this);
          },
          $raiseCustomViewsListLoad: function () {
            t.staticEquals(this.$1$CustomViewsListLoadField, null) ||
              this.$1$CustomViewsListLoadField(this);
          },
          $raiseVizResizeEvent: function (e) {
            t.staticEquals(this.$1$VizResizeField, null) ||
              this.$1$VizResizeField(new Te('vizresize', this.$viz, e));
          },
          $setFrameSize: function (e, t) {
            (this.$parameters.width = e),
              (this.$parameters.height = t),
              (this.$iframe.style.width = this.$parameters.width),
              (this.$iframe.style.height = this.$parameters.height);
          },
          $verifyOperationAllowedOnActiveSheetOrSheetWithinActiveDashboard: function (
            e,
          ) {
            if (t.isNullOrUndefined(e)) return null;
            var i = this.$workbookImpl.$findActiveSheetOrSheetWithinActiveDashboard(
              e,
            );
            if (t.isNullOrUndefined(i)) throw U.createNotActiveSheet();
            return i.get_name();
          },
          $invokeAutomaticUpdatesCommandAsync: function (e) {
            if (
              'pauseAutomaticUpdates' !== e &&
              'resumeAutomaticUpdates' !== e &&
              'toggleAutomaticUpdates' !== e
            )
              throw U.createInternalError(null);
            var i = {};
            i['api.invokeCommandName'] = e;
            var n = new r._Deferred(),
              a = new (t.makeGenericType(ue, [Object]))(
                'api.InvokeCommandCommand',
                0,
                t.mkdel(this, function (e) {
                  t.isValue(e) &&
                    t.isValue(e.isAutoUpdate) &&
                    (this.$areAutomaticUpdatesPaused = !e.isAutoUpdate),
                    n.resolve(this.$areAutomaticUpdatesPaused);
                }),
                function (e, t) {
                  n.reject(U.createServerError(t));
                },
              );
            return this._sendCommand(Object).call(this, i, a), n.get_promise();
          },
          $invokeCommand: function (e, i) {
            if (
              'showExportImageDialog' !== e &&
              'showExportDataDialog' !== e &&
              'showExportCrosstabDialog' !== e &&
              'showExportPDFDialog' !== e &&
              'showShareDialog' !== e &&
              'showDownloadWorkbookDialog' !== e
            )
              throw U.createInternalError(null);
            var n = {};
            (n['api.invokeCommandName'] = e),
              t.isValue(i) && (n['api.invokeCommandParam'] = i);
            var r = new (t.makeGenericType(ue, [Object]))(
              'api.InvokeCommandCommand',
              0,
              null,
              null,
            );
            this._sendCommand(Object).call(this, n, r);
          },
          $handleFirstVizSizeKnownEvent: function (e) {
            var i = JSON.parse(t.cast(e.get_data(), String));
            this.$handleInitialVizSize(i);
          },
          $handleVizInteractiveEvent: function (e) {
            t.isValue(this.$workbookImpl) &&
            t.referenceEquals(
              this.$workbookImpl.get_name(),
              e.get_workbookName(),
            )
              ? this.$onWorkbookInteractive(null)
              : this.$raiseStateReadyForQuery();
          },
          $handleMarksSelectionChangedEvent: function (e) {
            if (
              !t.staticEquals(this.$1$MarksSelectionField, null) &&
              t.referenceEquals(
                this.$workbookImpl.get_name(),
                e.get_workbookName(),
              )
            ) {
              var i = null,
                n = this.$workbookImpl.get_activeSheetImpl();
              if (
                (n.get_isStory() &&
                  (n = t
                    .cast(n, z)
                    .get_activeStoryPointImpl()
                    .get_containedSheetImpl()),
                t.referenceEquals(n.get_name(), e.get_worksheetName()))
              )
                i = t.cast(n, W);
              else if (n.get_isDashboard()) {
                i = t.cast(n, N).get_worksheets()._get(e.get_worksheetName())
                  ._impl;
              }
              t.isValue(i) &&
                (i.set_selectedMarks(null),
                this.$1$MarksSelectionField(
                  new ye('marksselection', this.$viz, i),
                ));
            }
          },
          $handleMarksHighlightChangedEvent: function (e) {
            if (
              !t.staticEquals(this.$1$MarksHighlightField, null) &&
              t.referenceEquals(
                this.$workbookImpl.get_name(),
                e.get_workbookName(),
              )
            ) {
              var i = null,
                n = this.$workbookImpl.get_activeSheetImpl();
              if (
                (n.get_isStory() &&
                  (n = t
                    .cast(n, z)
                    .get_activeStoryPointImpl()
                    .get_containedSheetImpl()),
                t.referenceEquals(n.get_name(), e.get_worksheetName()))
              )
                i = t.cast(n, W);
              else if (n.get_isDashboard()) {
                i = t.cast(n, N).get_worksheets()._get(e.get_worksheetName())
                  ._impl;
              }
              t.isValue(i) &&
                ((i.highlightedMarks = null),
                this.$1$MarksHighlightField(
                  new $e('markshighlight', this.$viz, i),
                ));
            }
          },
          $handleFilterChangedEvent: function (e) {
            if (
              !t.staticEquals(this.$1$FilterChangeField, null) &&
              t.referenceEquals(
                this.$workbookImpl.get_name(),
                e.get_workbookName(),
              )
            ) {
              var i = null,
                n = this.$workbookImpl.get_activeSheetImpl();
              if (t.referenceEquals(n.get_name(), e.get_worksheetName()))
                i = t.cast(n, W);
              else if (n.get_isDashboard()) {
                i = t.cast(n, N).get_worksheets()._get(e.get_worksheetName())
                  ._impl;
              } else if (n.get_isStory()) {
                var r = t
                  .cast(n, z)
                  .get_activeStoryPointImpl()
                  .get_containedSheetImpl();
                if (r.get_isDashboard())
                  i = t.cast(r, N).get_worksheets()._get(e.get_worksheetName())
                    ._impl;
                else
                  t.referenceEquals(r.get_name(), e.get_worksheetName()) &&
                    (i = t.cast(r, W));
              }
              if (t.isValue(i)) {
                var a = t.cast(JSON.parse(t.cast(e.get_data(), String)), Array),
                  s = a[0],
                  o = a[1];
                this.$1$FilterChangeField(
                  new fe('filterchange', this.$viz, i, s, o),
                );
              }
            }
          },
          $handleParameterChangedEvent: function (e) {
            if (
              !t.staticEquals(this.$1$ParameterValueChangeField, null) &&
              t.referenceEquals(
                this.$workbookImpl.get_name(),
                e.get_workbookName(),
              )
            ) {
              this.$workbookImpl.set_$lastChangedParameterImpl(null);
              var i = t.cast(e.get_data(), String);
              this.$raiseParameterValueChange(i);
            }
          },
          $handleCustomViewsListLoadedEvent: function (e) {
            var i = JSON.parse(t.cast(e.get_data(), String)),
              n = t.mkdel(this, function () {
                C._processCustomViews(
                  this.$workbookImpl,
                  this.$messagingOptions,
                  i,
                );
              }),
              r = t.mkdel(this, function () {
                this.$raiseCustomViewsListLoad(),
                  t.staticEquals(this.$1$CustomViewLoadField, null) ||
                    i.customViewLoaded ||
                    this.$raiseCustomViewLoad(
                      this.$workbookImpl.get_activeCustomView(),
                    );
              });
            t.isNullOrUndefined(this.$workbookImpl)
              ? ((this.$initializingWorkbookImpl = !0),
                (this.$workbookImpl = new j(
                  this,
                  this.$messagingOptions,
                  t.mkdel(this, function () {
                    n(),
                      this.$onWorkbookInteractive(r),
                      (this.$initializingWorkbookImpl = !1);
                  }),
                )))
              : (n(), this.$ensureCalledAfterFirstInteractive(r));
          },
          $handleCustomViewUpdatedEvent: function (e) {
            var i = JSON.parse(t.cast(e.get_data(), String));
            if (
              (t.isNullOrUndefined(this.$workbookImpl) &&
                (this.$workbookImpl = new j(
                  this,
                  this.$messagingOptions,
                  null,
                )),
              t.isValue(this.$workbookImpl) &&
                C._processCustomViewUpdate(
                  this.$workbookImpl,
                  this.$messagingOptions,
                  i,
                  !0,
                ),
              !t.staticEquals(this.$1$CustomViewSaveField, null))
            )
              for (
                var n = this.$workbookImpl
                    .get_$updatedCustomViews()
                    ._toApiCollection(),
                  r = 0,
                  a = n.length;
                r < a;
                r++
              )
                this.$raiseCustomViewSave(n[r]);
          },
          $handleCustomViewRemovedEvent: function () {
            if (!t.staticEquals(this.$1$CustomViewRemoveField, null))
              for (
                var e = this.$workbookImpl
                    .get_$removedCustomViews()
                    ._toApiCollection(),
                  i = 0,
                  n = e.length;
                i < n;
                i++
              )
                this.$raiseCustomViewRemove(e[i]);
          },
          $handleCustomViewSetDefaultEvent: function (e) {
            var i = JSON.parse(t.cast(e.get_data(), String));
            if (
              (t.isValue(this.$workbookImpl) &&
                C._processCustomViews(
                  this.$workbookImpl,
                  this.$messagingOptions,
                  i,
                ),
              !t.staticEquals(this.$1$CustomViewSetDefaultField, null) &&
                t.isValue(i.defaultCustomViewId))
            )
              for (
                var n = this.$workbookImpl.get_$customViews(), r = 0;
                r < n.get__length();
                r++
              ) {
                var a = n.get_item(r);
                if (a.getDefault()) {
                  this.$raiseCustomViewSetDefault(a);
                  break;
                }
              }
          },
          $handleTabSwitchEvent: function (e) {
            this.$workbookImpl._update(
              t.mkdel(this, function () {
                if (
                  (t.isValue(this.$workbookTabSwitchHandler) &&
                    this.$workbookTabSwitchHandler(),
                  t.referenceEquals(
                    this.$workbookImpl.get_name(),
                    e.get_workbookName(),
                  ))
                ) {
                  var i = e.get_worksheetName(),
                    n = t.cast(e.get_data(), String);
                  this.$raiseTabSwitch(i, n);
                }
                this.$onWorkbookInteractive(null);
              }),
            );
          },
          $handleStorytellingStateChangedEvent: function (e) {
            var i = t.cast(this.$workbookImpl.get_activeSheetImpl(), z);
            'story' === i.get_sheetType() &&
              i.update(JSON.parse(t.cast(e.get_data(), String)));
          },
          $onWorkbookInteractive: function (e) {
            if (!this.$onFirstInteractiveAlreadyCalled) {
              var i = this.$onFirstInteractiveCallback;
              window.setTimeout(
                t.mkdel(this, function () {
                  t.staticEquals(i, null) ||
                    i(new Ae('firstinteractive', this.$viz)),
                    t.staticEquals(e, null) || e();
                }),
                0,
              ),
                (this.$onFirstInteractiveAlreadyCalled = !0);
            }
            this.$raiseStateReadyForQuery();
          },
          $ensureCalledAfterFirstInteractive: function (e) {
            var i = new Date(),
              n = null;
            (n = t.mkdel(this, function () {
              var t = new Date();
              if (this.$onFirstInteractiveAlreadyCalled) e();
              else {
                if (t - i > 3e5)
                  throw U.createInternalError(
                    'Timed out while waiting for the viz to become interactive',
                  );
                window.setTimeout(n, 10);
              }
            }))();
          },
          $checkForDone: function () {
            M.isIE()
              ? 'complete' === this.$iframe.readyState && this.handleVizLoad()
              : this.handleVizLoad();
          },
          $onCheckForDone: function () {
            window.setTimeout(t.mkdel(this, this.$checkForDone), 3e3);
          },
          $createStaticImageElement: function (e) {
            var i = document.createElement('div'),
              n = t.cast(
                i,
                t.isValue(i) &&
                  t.isInstanceOfType(i, Element) &&
                  'DIV' === i.tagName,
              );
            return (
              (n.style.background =
                "transparent url('" +
                this.$parameters.staticImageUrl +
                "') no-repeat scroll 0 0"),
              (n.style.left = '8px'),
              (n.style.top = this.$parameters.tabs ? '31px' : '9px'),
              (n.style.position = 'absolute'),
              (n.style.width = e.width + 'px'),
              (n.style.height = e.height + 'px'),
              this.$contentRootElement().appendChild(n),
              n
            );
          },
          $createIframe: function () {
            if (t.isNullOrUndefined(this.$contentRootElement())) return null;
            var e = document.createElement('IFrame'),
              i = t.cast(
                e,
                t.isValue(e) &&
                  t.isInstanceOfType(e, Element) &&
                  'IFRAME' === e.tagName,
              );
            return (
              (i.frameBorder = '0'),
              i.setAttribute('allowTransparency', 'true'),
              i.setAttribute('allowFullScreen', 'true'),
              i.setAttribute('title', this.$getLocalizedTitle()),
              (i.marginHeight = '0'),
              (i.marginWidth = '0'),
              (i.style.display = 'block'),
              this.$parameters.fixedSize
                ? ((i.style.width = this.$parameters.width),
                  (i.style.height = this.$parameters.height))
                : ((i.style.width = '1px'),
                  (i.style.height = '1px'),
                  i.setAttribute('scrolling', 'no')),
              M.isSafari() &&
                i.addEventListener(
                  'mousewheel',
                  t.mkdel(this, this.$onIframeMouseWheel),
                  !1,
                ),
              this.$contentRootElement().appendChild(i),
              i
            );
          },
          $getLocalizedTitle: function () {
            var e = window.navigator.language;
            if ('zh-CN' === e) return '数据可视化';
            switch (e.substr(0, 2)) {
              case 'fr':
                return 'Visualisation de données';
              case 'es':
                return 'Visualización de datos';
              case 'pt':
                return 'Visualização de dados';
              case 'ja':
                return 'データ ビジュアライゼーション';
              case 'de':
                return 'Datenvisualisierung';
              case 'ko':
                return '데이터 비주얼리제이션';
              case 'en':
              default:
                return 'data visualization';
            }
          },
          $onIframeMouseWheel: function (e) {},
          $getOnCheckForDoneDelegate: function () {
            return t.mkdel(this, function (e) {
              this.$onCheckForDone();
            });
          },
          $handleInitialVizSize: function (e) {
            var i = Ie.fromSizeConstraints(e.sizeConstraints);
            (this.$vizSize = Oe.$ctor(i, e.chromeHeight)),
              t.isValue(this.$onFirstVizSizeKnownCallback) &&
                this.$onFirstVizSizeKnownCallback(
                  new ge('firstvizsizeknown', this.$viz, this.$vizSize),
                ),
              this.$parameters.fixedSize ||
                (this.$refreshSize(),
                this.$addWindowResizeHandler(),
                this.$show());
          },
          $removeWindowResizeHandler: function () {
            t.isNullOrUndefined(this.$windowResizeHandler) ||
              (M.hasWindowAddEventListener()
                ? window.removeEventListener(
                    'resize',
                    this.$windowResizeHandler,
                    !1,
                  )
                : window.self.detachEvent(
                    'onresize',
                    this.$windowResizeHandler,
                  ),
              (this.$windowResizeHandler = null));
          },
          $addWindowResizeHandler: function () {
            t.isValue(this.$windowResizeHandler) ||
              ((this.$windowResizeHandler = t.mkdel(this, function () {
                this.$refreshSize();
              })),
              M.hasWindowAddEventListener()
                ? window.addEventListener(
                    'resize',
                    this.$windowResizeHandler,
                    !1,
                  )
                : window.self.attachEvent(
                    'onresize',
                    this.$windowResizeHandler,
                  ));
          },
        },
        null,
        [_e],
      ),
      t.initClass(
        Te,
        a,
        {
          getAvailableSize: function () {
            return this.$availableSize;
          },
        },
        Ae,
      ),
      t.initClass(Oe, a, {}, Object),
      t.initClass(He, a, {
        getFilterType: function () {
          return this.$type;
        },
        getFieldName: function () {
          return this.$caption;
        },
        getWorksheet: function () {
          return this.$worksheetImpl.get_worksheet();
        },
        getFieldAsync: function () {
          var e = new r._Deferred();
          if (t.isNullOrUndefined(this.$field)) {
            var i = t.mkdel(this, function (t) {
              return (
                (this.$field = new Le(
                  t,
                  this.$caption,
                  this.$fieldRole,
                  this.$fieldAggregation,
                )),
                e.resolve(this.$field),
                null
              );
            });
            this.$worksheetImpl
              .$getDataSourceAsync(this.$dataSourceName)
              .then(i, function (t) {
                return e.reject(t), null;
              });
          } else
            window.setTimeout(
              t.mkdel(this, function () {
                e.resolve(this.$field);
              }),
              0,
            );
          return e.get_promise();
        },
        _update: function (e) {
          this.$initializeFromJson(e), this._updateFromJson(e);
        },
        _addFieldParams: function (e) {},
        _updateFromJson: null,
        $initializeFromJson: function (e) {
          (this.$caption = e.caption),
            (this.$type = B.convertFilterType(e.filterType)),
            (this.$field = null),
            (this.$dataSourceName = e.dataSourceName),
            (this.$fieldRole = B.convertFieldRole(
              t.coalesce(e.fieldRole, 'unknown'),
            )),
            (this.$fieldAggregation = B.convertFieldAggregation(
              t.coalesce(e.fieldAggregation, 'NONE'),
            ));
        },
      }),
      t.initClass(
        De,
        a,
        {
          getIsExcludeMode: function () {
            return this.$isExclude;
          },
          getAppliedValues: function () {
            return this.$appliedValues;
          },
          _updateFromJson: function (e) {
            this.$initializeFromJson$1(e);
          },
          $initializeFromJson$1: function (e) {
            if (((this.$isExclude = e.isExclude), t.isValue(e.appliedValues))) {
              this.$appliedValues = [];
              for (var i = 0; i < e.appliedValues.length; i++) {
                var n = e.appliedValues[i];
                this.$appliedValues.push(M.getDataValue(n));
              }
            }
          },
        },
        He,
      ),
      t.initClass(Re, a, {
        getFieldName: function () {
          return this.$impl.get_fieldName();
        },
        getDataType: function () {
          return this.$impl.get_dataType();
        },
        getIsReferenced: function () {
          return this.$impl.get_isReferenced();
        },
        getIndex: function () {
          return this.$impl.get_index();
        },
      }),
      t.initClass(ze, a, {
        getWorkbook: function () {
          return this._impl.get_$workbook();
        },
        getUrl: function () {
          return this._impl.get_$url();
        },
        getName: function () {
          return this._impl.get_$name();
        },
        setName: function (e) {
          this._impl.set_$name(e);
        },
        getOwnerName: function () {
          return this._impl.get_$ownerName();
        },
        getAdvertised: function () {
          return this._impl.get_$advertised();
        },
        setAdvertised: function (e) {
          this._impl.set_$advertised(e);
        },
        getDefault: function () {
          return this._impl.get_$isDefault();
        },
        saveAsync: function () {
          return this._impl.$saveAsync();
        },
      }),
      t.initClass(Qe, a, {
        getName: function () {
          return this._impl.get_name();
        },
        getIndex: function () {
          return this._impl.get_index();
        },
        getWorkbook: function () {
          return this._impl.get_workbookImpl().get_workbook();
        },
        getSize: function () {
          return this._impl.get_size();
        },
        getIsHidden: function () {
          return this._impl.get_isHidden();
        },
        getIsActive: function () {
          return this._impl.get_isActive();
        },
        getSheetType: function () {
          return this._impl.get_sheetType();
        },
        getUrl: function () {
          return this._impl.get_url();
        },
        changeSizeAsync: function (e) {
          return this._impl.changeSizeAsync(e);
        },
      }),
      t.initClass(
        Pe,
        a,
        {
          getParentStoryPoint: function () {
            return this._impl.get_parentStoryPoint();
          },
          getObjects: function () {
            return this._impl.get_objects()._toApiCollection();
          },
          getWorksheets: function () {
            return this._impl.get_worksheets()._toApiCollection();
          },
        },
        Qe,
      ),
      t.initClass(xe, a, {
        getObjectType: function () {
          return this.$zoneInfo.objectType;
        },
        getDashboard: function () {
          return this.$dashboard;
        },
        getWorksheet: function () {
          return this.$worksheet;
        },
        getPosition: function () {
          return this.$zoneInfo.position;
        },
        getSize: function () {
          return this.$zoneInfo.size;
        },
      }),
      t.initClass(Ue, a, {
        getName: function () {
          return this.$impl.get_name();
        },
        getFields: function () {
          return this.$impl.get_fields()._toApiCollection();
        },
        getIsPrimary: function () {
          return this.$impl.get_isPrimary();
        },
      }),
      t.initClass(Me, a, {
        getName: function () {
          return this.$impl.get_name();
        },
        getData: function () {
          return this.$impl.get_rows();
        },
        getColumns: function () {
          return this.$impl.get_columns();
        },
        getTotalRowCount: function () {
          return this.$impl.get_totalRowCount();
        },
        getIsSummaryData: function () {
          return this.$impl.get_isSummaryData();
        },
      }),
      t.initClass(Le, a, {
        getDataSource: function () {
          return this.$dataSource;
        },
        getName: function () {
          return this.$name;
        },
        getRole: function () {
          return this.$fieldRoleType;
        },
        getAggregation: function () {
          return this.$fieldAggrType;
        },
      }),
      t.initClass(
        je,
        a,
        {
          _addFieldParams: function (e) {
            e['api.filterHierarchicalLevels'] = this.$levels;
          },
          _updateFromJson: function (e) {
            this.$initializeFromJson$1(e);
          },
          $initializeFromJson$1: function (e) {
            this.$levels = e.levels;
          },
        },
        He,
      ),
      t.initClass(We, a, {
        getPairs: function () {
          return this.$impl.get_$clonedPairs();
        },
      }),
      t.initClass(qe, a, {}),
      t.initClass(Ge, a, {
        getName: function () {
          return this._impl.get_$name();
        },
        getCurrentValue: function () {
          return this._impl.get_$currentValue();
        },
        getDataType: function () {
          return this._impl.get_$dataType();
        },
        getAllowableValuesType: function () {
          return this._impl.get_$allowableValuesType();
        },
        getAllowableValues: function () {
          return this._impl.get_$allowableValues();
        },
        getMinValue: function () {
          return this._impl.get_$minValue();
        },
        getMaxValue: function () {
          return this._impl.get_$maxValue();
        },
        getStepSize: function () {
          return this._impl.get_$stepSize();
        },
        getDateStepPeriod: function () {
          return this._impl.get_$dateStepPeriod();
        },
      }),
      t.initClass(
        Ke,
        a,
        {
          getMin: function () {
            return this.$min;
          },
          getMax: function () {
            return this.$max;
          },
          getIncludeNullValues: function () {
            return this.$includeNullValues;
          },
          getDomainMin: function () {
            return this.$domainMin;
          },
          getDomainMax: function () {
            return this.$domainMax;
          },
          _updateFromJson: function (e) {
            this.$initializeFromJson$1(e);
          },
          $initializeFromJson$1: function (e) {
            (this.$domainMin = M.getDataValue(e.domainMinValue)),
              (this.$domainMax = M.getDataValue(e.domainMaxValue)),
              (this.$min = M.getDataValue(e.minValue)),
              (this.$max = M.getDataValue(e.maxValue)),
              (this.$includeNullValues = e.includeNullValues);
          },
        },
        He,
      ),
      t.initClass(
        Be,
        a,
        {
          getPeriod: function () {
            return this.$periodType;
          },
          getRange: function () {
            return this.$rangeType;
          },
          getRangeN: function () {
            return this.$rangeN;
          },
          _updateFromJson: function (e) {
            this.$initializeFromJson$1(e);
          },
          $initializeFromJson$1: function (e) {
            t.isValue(e.periodType) &&
              (this.$periodType = B.convertPeriodType(t.unbox(e.periodType))),
              t.isValue(e.rangeType) &&
                (this.$rangeType = B.convertDateRange(t.unbox(e.rangeType))),
              t.isValue(e.rangeN) && (this.$rangeN = t.unbox(e.rangeN));
          },
        },
        He,
      ),
      t.initClass(Je, a, {
        getName: function () {
          return this.$impl.name;
        },
        getSheetType: function () {
          return this.$impl.sheetType;
        },
        getSize: function () {
          return this.$impl.size;
        },
        getIndex: function () {
          return this.$impl.index;
        },
        getUrl: function () {
          return this.$impl.url;
        },
        getIsActive: function () {
          return this.$impl.isActive;
        },
        getIsHidden: function () {
          return this.$impl.isHidden;
        },
        getWorkbook: function () {
          return this.$impl.workbook;
        },
      }),
      t.initClass(
        Ye,
        a,
        {
          getActiveStoryPoint: function () {
            return this._impl.get_activeStoryPointImpl().get_storyPoint();
          },
          getStoryPointsInfo: function () {
            return this._impl.get_storyPointsInfo();
          },
          activatePreviousStoryPointAsync: function () {
            return this._impl.activatePreviousStoryPointAsync();
          },
          activateNextStoryPointAsync: function () {
            return this._impl.activateNextStoryPointAsync();
          },
          activateStoryPointAsync: function (e) {
            return this._impl.activateStoryPointAsync(e);
          },
          revertStoryPointAsync: function (e) {
            return this._impl.revertStoryPointAsync(e);
          },
        },
        Qe,
      ),
      t.initClass(Xe, a, {
        getCaption: function () {
          return this.$impl.get_caption();
        },
        getContainedSheet: function () {
          return t.isValue(this.$impl.get_containedSheetImpl())
            ? this.$impl.get_containedSheetImpl().get_sheet()
            : null;
        },
        getIndex: function () {
          return this.$impl.get_index();
        },
        getIsActive: function () {
          return this.$impl.get_isActive();
        },
        getIsUpdated: function () {
          return this.$impl.get_isUpdated();
        },
        getParentStory: function () {
          return this.$impl.get_parentStoryImpl().get_story();
        },
      }),
      t.initClass(Ze, a, {
        getCaption: function () {
          return this._impl.caption;
        },
        getIndex: function () {
          return this._impl.index;
        },
        getIsActive: function () {
          return this._impl.isActive;
        },
        getIsUpdated: function () {
          return this._impl.isUpdated;
        },
        getParentStory: function () {
          return this._impl.parentStoryImpl.get_story();
        },
      }),
      t.initClass(et, a, {
        getMajor: function () {
          return this.$major;
        },
        getMinor: function () {
          return this.$minor;
        },
        getPatch: function () {
          return this.$patch;
        },
        getMetadata: function () {
          return this.$metadata;
        },
        toString: function () {
          var e = this.$major + '.' + this.$minor + '.' + this.$patch;
          return (
            t.isValue(this.$metadata) &&
              this.$metadata.length > 0 &&
              (e += '-' + this.$metadata),
            e
          );
        },
      }),
      t.initClass(tt, a, {
        getAreTabsHidden: function () {
          return this._impl.get_$areTabsHidden();
        },
        getIsToolbarHidden: function () {
          return this._impl.get_$isToolbarHidden();
        },
        getIsHidden: function () {
          return this._impl.get_$isHidden();
        },
        getInstanceId: function () {
          return this._impl.get_instanceId();
        },
        getParentElement: function () {
          return this._impl.get_$parentElement();
        },
        getUrl: function () {
          return this._impl.get_$url();
        },
        getVizSize: function () {
          return this._impl.get_$vizSize();
        },
        getWorkbook: function () {
          return this._impl.get_$workbook();
        },
        getAreAutomaticUpdatesPaused: function () {
          return this._impl.get_$areAutomaticUpdatesPaused();
        },
        getCurrentUrlAsync: function () {
          return this._impl.getCurrentUrlAsync();
        },
        addEventListener: function (e, t) {
          this._impl.addEventListener(e, t);
        },
        removeEventListener: function (e, t) {
          this._impl.removeEventListener(e, t);
        },
        dispose: function () {
          this._impl.$dispose();
        },
        show: function () {
          this._impl.$show();
        },
        hide: function () {
          this._impl.$hide();
        },
        showExportDataDialog: function (e) {
          this._impl.$showExportDataDialog(e);
        },
        showExportCrossTabDialog: function (e) {
          this._impl.$showExportCrossTabDialog(e);
        },
        showExportImageDialog: function () {
          this._impl.$showExportImageDialog();
        },
        showExportPDFDialog: function () {
          this._impl.$showExportPDFDialog();
        },
        revertAllAsync: function () {
          return this._impl.$revertAllAsync();
        },
        refreshDataAsync: function () {
          return this._impl.$refreshDataAsync();
        },
        showShareDialog: function () {
          this._impl.$showShareDialog();
        },
        showDownloadWorkbookDialog: function () {
          this._impl.$showDownloadWorkbookDialog();
        },
        pauseAutomaticUpdatesAsync: function () {
          return this._impl.$pauseAutomaticUpdatesAsync();
        },
        resumeAutomaticUpdatesAsync: function () {
          return this._impl.$resumeAutomaticUpdatesAsync();
        },
        toggleAutomaticUpdatesAsync: function () {
          return this._impl.$toggleAutomaticUpdatesAsync();
        },
        refreshSize: function () {
          this._impl.$refreshSize();
        },
        setFrameSize: function (e, t) {
          var i = e,
            n = t;
          M.isNumber(e) && (i = e.toString() + 'px'),
            M.isNumber(t) && (n = t.toString() + 'px'),
            this._impl.$setFrameSizeAndUpdate(i, n);
        },
      }),
      t.initClass(it, a, {}),
      t.initClass(nt, a, {
        getViz: function () {
          return this.$workbookImpl.get_viz();
        },
        getPublishedSheetsInfo: function () {
          return this.$workbookImpl.get_publishedSheets()._toApiCollection();
        },
        getName: function () {
          return this.$workbookImpl.get_name();
        },
        getActiveSheet: function () {
          return this.$workbookImpl.get_activeSheetImpl().get_sheet();
        },
        getActiveCustomView: function () {
          return this.$workbookImpl.get_activeCustomView();
        },
        activateSheetAsync: function (e) {
          return this.$workbookImpl._setActiveSheetAsync(e);
        },
        revertAllAsync: function () {
          return this.$workbookImpl._revertAllAsync();
        },
        getCustomViewsAsync: function () {
          return this.$workbookImpl.$getCustomViewsAsync();
        },
        showCustomViewAsync: function (e) {
          return this.$workbookImpl.$showCustomViewAsync(e);
        },
        removeCustomViewAsync: function (e) {
          return this.$workbookImpl.$removeCustomViewAsync(e);
        },
        rememberCustomViewAsync: function (e) {
          return this.$workbookImpl.$rememberCustomViewAsync(e);
        },
        setActiveCustomViewAsDefaultAsync: function () {
          return this.$workbookImpl.$setActiveCustomViewAsDefaultAsync();
        },
        getParametersAsync: function () {
          return this.$workbookImpl.$getParametersAsync();
        },
        changeParameterValueAsync: function (e, t) {
          return this.$workbookImpl.$changeParameterValueAsync(e, t);
        },
      }),
      t.initClass(
        at,
        a,
        {
          getParentDashboard: function () {
            return this._impl.get_parentDashboard();
          },
          getParentStoryPoint: function () {
            return this._impl.get_parentStoryPoint();
          },
          getDataSourcesAsync: function () {
            return this._impl.$getDataSourcesAsync();
          },
          getFilterAsync: function (e, t) {
            return this._impl.$getFilterAsync(null, e, t);
          },
          getFiltersAsync: function (e) {
            return this._impl.$getFiltersAsync(e);
          },
          applyFilterAsync: function (e, t, i, n) {
            return this._impl.$applyFilterAsync(e, t, i, n);
          },
          clearFilterAsync: function (e) {
            return this._impl.$clearFilterAsync(e);
          },
          applyRangeFilterAsync: function (e, t) {
            return this._impl.$applyRangeFilterAsync(e, t);
          },
          applyRelativeDateFilterAsync: function (e, t) {
            return this._impl.$applyRelativeDateFilterAsync(e, t);
          },
          applyHierarchicalFilterAsync: function (e, t, i, n) {
            return this._impl.$applyHierarchicalFilterAsync(e, t, i, n);
          },
          clearSelectedMarksAsync: function () {
            return this._impl.$clearSelectedMarksAsync();
          },
          selectMarksAsync: function (e, t, i) {
            return this._impl.$selectMarksAsync(e, t, i);
          },
          getSelectedMarksAsync: function () {
            return this._impl.$getSelectedMarksAsync();
          },
          getSummaryDataAsync: function (e) {
            return this._impl.$getSummaryDataAsync(e);
          },
          getUnderlyingDataAsync: function (e) {
            return this._impl.$getUnderlyingDataAsync(e);
          },
          clearHighlightedMarksAsync: function () {
            return this._impl.$clearHighlightedMarksAsync();
          },
          highlightMarksAsync: function (e, t) {
            return this._impl.$highlightMarksAsync(e, t);
          },
          highlightMarksByPatternMatchAsync: function (e, t) {
            return this._impl.$highlightMarksByPatternMatchAsync(e, t);
          },
          getHighlightedMarksAsync: function () {
            return this._impl.$getHighlightedMarksAsync();
          },
        },
        Qe,
      ),
      (v.crossDomainEventNotificationId = 'xdomainSourceId'),
      (v.lastRequestMessage = null),
      (v.lastResponseMessage = null),
      (v.lastClientInfoResponseMessage = null),
      (v.$nextCommandId = 0),
      (L.$vizs = []),
      (k.$arrayType = 'array'),
      (k.$booleanType = 'boolean'),
      (k.$dateType = 'date'),
      (k.$functionType = 'function'),
      (k.$numberType = 'number'),
      (k.$objectType = 'object'),
      (k.$regExpType = 'regexp'),
      (k.$stringType = 'string'),
      (k.$class2type = t.mkdict([
        '[object Boolean]',
        k.$booleanType,
        '[object Number]',
        k.$numberType,
        '[object String]',
        k.$stringType,
        '[object Function]',
        k.$functionType,
        '[object Array]',
        k.$arrayType,
        '[object Date]',
        k.$dateType,
        '[object RegExp]',
        k.$regExpType,
        '[object Object]',
        k.$objectType,
      ])),
      (k.$trim = t.cast(String.prototype.trim, Function)),
      (k.$toString = t.cast(Object.prototype.toString, Function)),
      (k.$trimLeft = new RegExp('^[\\s\\xA0]+')),
      (k.$trimRight = new RegExp('[\\s\\xA0]+$')),
      (k.$rvalidchars = new RegExp('^[\\],:{}\\s]*$')),
      (k.$rvalidescape = new RegExp(
        '\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})',
        'g',
      )),
      (k.$rvalidtokens = new RegExp(
        '"[^"\\\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',
        'g',
      )),
      (k.$rvalidbraces = new RegExp('(?:^|:|,)(?:\\s*\\[)+', 'g')),
      ((rt = e.tableauSoftware).DeviceType = {
        DEFAULT: 'default',
        DESKTOP: 'desktop',
        TABLET: 'tablet',
        PHONE: 'phone',
      }),
      (rt.DashboardObjectType = {
        BLANK: 'blank',
        WORKSHEET: 'worksheet',
        QUICK_FILTER: 'quickFilter',
        PARAMETER_CONTROL: 'parameterControl',
        PAGE_FILTER: 'pageFilter',
        LEGEND: 'legend',
        TITLE: 'title',
        TEXT: 'text',
        IMAGE: 'image',
        WEB_PAGE: 'webPage',
      }),
      (rt.DataType = {
        FLOAT: 'float',
        INTEGER: 'integer',
        STRING: 'string',
        BOOLEAN: 'boolean',
        DATE: 'date',
        DATETIME: 'datetime',
      }),
      (rt.DateRangeType = {
        LAST: 'last',
        LASTN: 'lastn',
        NEXT: 'next',
        NEXTN: 'nextn',
        CURR: 'curr',
        TODATE: 'todate',
      }),
      (rt.ErrorCode = {
        INTERNAL_ERROR: 'internalError',
        SERVER_ERROR: 'serverError',
        INVALID_AGGREGATION_FIELD_NAME: 'invalidAggregationFieldName',
        INVALID_PARAMETER: 'invalidParameter',
        INVALID_URL: 'invalidUrl',
        STALE_DATA_REFERENCE: 'staleDataReference',
        VIZ_ALREADY_IN_MANAGER: 'vizAlreadyInManager',
        NO_URL_OR_PARENT_ELEMENT_NOT_FOUND: 'noUrlOrParentElementNotFound',
        INVALID_FILTER_FIELDNAME: 'invalidFilterFieldName',
        INVALID_FILTER_FIELDVALUE: 'invalidFilterFieldValue',
        INVALID_FILTER_FIELDNAME_OR_VALUE: 'invalidFilterFieldNameOrValue',
        FILTER_CANNOT_BE_PERFORMED: 'filterCannotBePerformed',
        NOT_ACTIVE_SHEET: 'notActiveSheet',
        INVALID_CUSTOM_VIEW_NAME: 'invalidCustomViewName',
        MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS:
          'missingRangeNForRelativeDateFilters',
        MISSING_MAX_SIZE: 'missingMaxSize',
        MISSING_MIN_SIZE: 'missingMinSize',
        MISSING_MINMAX_SIZE: 'missingMinMaxSize',
        INVALID_SIZE: 'invalidSize',
        INVALID_SIZE_BEHAVIOR_ON_WORKSHEET: 'invalidSizeBehaviorOnWorksheet',
        SHEET_NOT_IN_WORKBOOK: 'sheetNotInWorkbook',
        INDEX_OUT_OF_RANGE: 'indexOutOfRange',
        DOWNLOAD_WORKBOOK_NOT_ALLOWED: 'downloadWorkbookNotAllowed',
        NULL_OR_EMPTY_PARAMETER: 'nullOrEmptyParameter',
        BROWSER_NOT_CAPABLE: 'browserNotCapable',
        UNSUPPORTED_EVENT_NAME: 'unsupportedEventName',
        INVALID_DATE_PARAMETER: 'invalidDateParameter',
        INVALID_SELECTION_FIELDNAME: 'invalidSelectionFieldName',
        INVALID_SELECTION_VALUE: 'invalidSelectionValue',
        INVALID_SELECTION_DATE: 'invalidSelectionDate',
        NO_URL_FOR_HIDDEN_WORKSHEET: 'noUrlForHiddenWorksheet',
        MAX_VIZ_RESIZE_ATTEMPTS: 'maxVizResizeAttempts',
      }),
      (rt.FieldAggregationType = {
        SUM: 'SUM',
        AVG: 'AVG',
        MIN: 'MIN',
        MAX: 'MAX',
        STDEV: 'STDEV',
        STDEVP: 'STDEVP',
        VAR: 'VAR',
        VARP: 'VARP',
        COUNT: 'COUNT',
        COUNTD: 'COUNTD',
        MEDIAN: 'MEDIAN',
        ATTR: 'ATTR',
        NONE: 'NONE',
        PERCENTILE: 'PERCENTILE',
        YEAR: 'YEAR',
        QTR: 'QTR',
        MONTH: 'MONTH',
        DAY: 'DAY',
        HOUR: 'HOUR',
        MINUTE: 'MINUTE',
        SECOND: 'SECOND',
        WEEK: 'WEEK',
        WEEKDAY: 'WEEKDAY',
        MONTHYEAR: 'MONTHYEAR',
        MDY: 'MDY',
        END: 'END',
        TRUNC_YEAR: 'TRUNC_YEAR',
        TRUNC_QTR: 'TRUNC_QTR',
        TRUNC_MONTH: 'TRUNC_MONTH',
        TRUNC_WEEK: 'TRUNC_WEEK',
        TRUNC_DAY: 'TRUNC_DAY',
        TRUNC_HOUR: 'TRUNC_HOUR',
        TRUNC_MINUTE: 'TRUNC_MINUTE',
        TRUNC_SECOND: 'TRUNC_SECOND',
        QUART1: 'QUART1',
        QUART3: 'QUART3',
        SKEWNESS: 'SKEWNESS',
        KURTOSIS: 'KURTOSIS',
        INOUT: 'INOUT',
        SUM_XSQR: 'SUM_XSQR',
        USER: 'USER',
      }),
      (rt.FieldRoleType = {
        DIMENSION: 'dimension',
        MEASURE: 'measure',
        UNKNOWN: 'unknown',
      }),
      (rt.FilterUpdateType = {
        ALL: 'all',
        REPLACE: 'replace',
        ADD: 'add',
        REMOVE: 'remove',
      }),
      (rt.FilterType = {
        CATEGORICAL: 'categorical',
        QUANTITATIVE: 'quantitative',
        HIERARCHICAL: 'hierarchical',
        RELATIVEDATE: 'relativedate',
      }),
      (rt.NullOption = {
        NULL_VALUES: 'nullValues',
        NON_NULL_VALUES: 'nonNullValues',
        ALL_VALUES: 'allValues',
      }),
      (rt.ParameterAllowableValuesType = {
        ALL: 'all',
        LIST: 'list',
        RANGE: 'range',
      }),
      (rt.ParameterDataType = {
        FLOAT: 'float',
        INTEGER: 'integer',
        STRING: 'string',
        BOOLEAN: 'boolean',
        DATE: 'date',
        DATETIME: 'datetime',
      }),
      (rt.PeriodType = {
        YEAR: 'year',
        QUARTER: 'quarter',
        MONTH: 'month',
        WEEK: 'week',
        DAY: 'day',
        HOUR: 'hour',
        MINUTE: 'minute',
        SECOND: 'second',
      }),
      (rt.SelectionUpdateType = {
        REPLACE: 'replace',
        ADD: 'add',
        REMOVE: 'remove',
      }),
      (rt.SheetSizeBehavior = {
        AUTOMATIC: 'automatic',
        EXACTLY: 'exactly',
        RANGE: 'range',
        ATLEAST: 'atleast',
        ATMOST: 'atmost',
      }),
      (rt.SheetType = {
        WORKSHEET: 'worksheet',
        DASHBOARD: 'dashboard',
        STORY: 'story',
      }),
      (rt.TableauEventName = {
        CUSTOM_VIEW_LOAD: 'customviewload',
        CUSTOM_VIEW_REMOVE: 'customviewremove',
        CUSTOM_VIEW_SAVE: 'customviewsave',
        CUSTOM_VIEW_SET_DEFAULT: 'customviewsetdefault',
        FILTER_CHANGE: 'filterchange',
        FIRST_INTERACTIVE: 'firstinteractive',
        FIRST_VIZ_SIZE_KNOWN: 'firstvizsizeknown',
        MARKS_SELECTION: 'marksselection',
        MARKS_HIGHLIGHT: 'markshighlight',
        PARAMETER_VALUE_CHANGE: 'parametervaluechange',
        STORY_POINT_SWITCH: 'storypointswitch',
        TAB_SWITCH: 'tabswitch',
        VIZ_RESIZE: 'vizresize',
      }),
      (rt.ToolbarPosition = { TOP: 'top', BOTTOM: 'bottom' }),
      (y.$creationRegistry = null),
      (y.$singletonInstanceRegistry = null),
      (D.noZoneId = 4294967295),
      (W.$regexHierarchicalFieldName = new RegExp('\\[[^\\]]+\\]\\.', 'g')),
      (et.$currentVersion = new et(2, 1, 2, 'null'));
  })(),
    (window.tableau = window.tableauSoftware = e.tableauSoftware),
    (tableauSoftware.Promise = r._PromiseImpl),
    (r._Deferred = r._DeferredImpl),
    (r._Collection = r._CollectionImpl),
    r._ApiBootstrap.initialize();
})();
