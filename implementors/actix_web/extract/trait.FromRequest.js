(function() {var implementors = {};
implementors["actix_web_lab"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>, const LIMIT:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; FromRequest for <a class=\"struct\" href=\"actix_web_lab/extract/struct.Json.html\" title=\"struct actix_web_lab::extract::Json\">Json</a>&lt;T, LIMIT&gt;","synthetic":false,"types":["actix_web_lab::json::Json"]},{"text":"impl&lt;T:&nbsp;'static&gt; FromRequest for <a class=\"struct\" href=\"actix_web_lab/extract/struct.LazyData.html\" title=\"struct actix_web_lab::extract::LazyData\">LazyData</a>&lt;T&gt;","synthetic":false,"types":["actix_web_lab::lazy_data::LazyData"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>&gt; FromRequest for <a class=\"struct\" href=\"actix_web_lab/extract/struct.Query.html\" title=\"struct actix_web_lab::extract::Query\">Query</a>&lt;T&gt;","synthetic":false,"types":["actix_web_lab::query::Query"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()