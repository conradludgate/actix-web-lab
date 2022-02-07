(function() {var implementors = {};
implementors["actix_web_lab"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/guard/struct.Acceptable.html\" title=\"struct actix_web_lab::guard::Acceptable\">Acceptable</a>","synthetic":true,"types":["actix_web_lab::acceptable::Acceptable"]},{"text":"impl&lt;T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/extract/struct.BodyHash.html\" title=\"struct actix_web_lab::extract::BodyHash\">BodyHash</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;D as <a class=\"trait\" href=\"https://docs.rs/crypto-common/0.1.1/crypto_common/trait.OutputSizeUser.html\" title=\"trait crypto_common::OutputSizeUser\">OutputSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/crypto-common/0.1.1/crypto_common/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type crypto_common::OutputSizeUser::OutputSize\">OutputSize</a> as ArrayLength&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;::ArrayType: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_web_lab::body_hash::BodyHash"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/body/struct.Sender.html\" title=\"struct actix_web_lab::body::Sender\">Sender</a>","synthetic":true,"types":["actix_web_lab::channel_body::Sender"]},{"text":"impl&lt;T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/extract/struct.BodyHmac.html\" title=\"struct actix_web_lab::extract::BodyHmac\">BodyHmac</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;D as <a class=\"trait\" href=\"https://docs.rs/crypto-common/0.1.1/crypto_common/trait.OutputSizeUser.html\" title=\"trait crypto_common::OutputSizeUser\">OutputSizeUser</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/crypto-common/0.1.1/crypto_common/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type crypto_common::OutputSizeUser::OutputSize\">OutputSize</a> as ArrayLength&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;::ArrayType: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_web_lab::hmac::BodyHmac"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/extract/struct.HmacConfig.html\" title=\"struct actix_web_lab::extract::HmacConfig\">HmacConfig</a>","synthetic":true,"types":["actix_web_lab::hmac::HmacConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/respond/struct.Html.html\" title=\"struct actix_web_lab::respond::Html\">Html</a>","synthetic":true,"types":["actix_web_lab::html::Html"]},{"text":"impl&lt;T, const LIMIT:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/extract/struct.Json.html\" title=\"struct actix_web_lab::extract::Json\">Json</a>&lt;T, LIMIT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_web_lab::json::Json"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/extract/struct.LazyData.html\" title=\"struct actix_web_lab::extract::LazyData\">LazyData</a>&lt;T&gt;","synthetic":true,"types":["actix_web_lab::lazy_data::LazyData"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/middleware/struct.MiddlewareFn.html\" title=\"struct actix_web_lab::middleware::MiddlewareFn\">MiddlewareFn</a>&lt;F&gt;","synthetic":true,"types":["actix_web_lab::middleware_from_fn::MiddlewareFn"]},{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/middleware/struct.Next.html\" title=\"struct actix_web_lab::middleware::Next\">Next</a>&lt;B&gt;","synthetic":true,"types":["actix_web_lab::middleware_from_fn::Next"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/extract/struct.Query.html\" title=\"struct actix_web_lab::extract::Query\">Query</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_web_lab::query::Query"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/web/struct.Redirect.html\" title=\"struct actix_web_lab::web::Redirect\">Redirect</a>","synthetic":true,"types":["actix_web_lab::redirect::Redirect"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/web/struct.Spa.html\" title=\"struct actix_web_lab::web::Spa\">Spa</a>","synthetic":true,"types":["actix_web_lab::spa::Spa"]},{"text":"impl&lt;'__pin, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/respond/struct.Csv.html\" title=\"struct actix_web_lab::respond::Csv\">Csv</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_web_lab::csv::Csv"]},{"text":"impl&lt;'__pin, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/respond/struct.DisplayStream.html\" title=\"struct actix_web_lab::respond::DisplayStream\">DisplayStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_web_lab::display_stream::DisplayStream"]},{"text":"impl&lt;'__pin, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_web_lab/respond/struct.NdJson.html\" title=\"struct actix_web_lab::respond::NdJson\">NdJson</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_web_lab::ndjson::NdJson"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()