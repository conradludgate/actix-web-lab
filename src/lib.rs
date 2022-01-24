//! In-progress extractors and middleware for Actix Web.
//!
//! # What Is This Crate?
//! This crate serves as a preview and test ground for upcoming features and ideas for Actix Web's
//! built in library of extractors, middleware and other utilities.
//!
//! Any kind of feedback is welcome.
//!
//! # Complete Examples
//! See [the `examples` folder](https://github.com/robjtede/actix-web-lab/tree/HEAD/examples) for
//! some complete examples of items in this crate.
//!
//! # Things To Know About This Crate
//! - It will never reach v1.0.
//! - Minimum Supported Rust Version (MSRV) is latest stable at the time of each release.
//! - Breaking changes will likely happen on most 0.x version bumps.
//! - Documentation might be limited for some items.
//! - Items that graduate to Actix Web crate will be marked deprecated here for a reasonable amount
//!   of time so you can migrate.
//! - Migrating will often be as easy as dropping the `_lab` suffix from imports when migrating.

mod acceptable;
mod body_hash;
mod buffered_serializing_stream;
mod channel_body;
mod csv;
mod display_stream;
mod json;
mod lazy_data;
mod middleware_from_fn;
mod ndjson;
mod query;
mod redirect;
mod spa;
mod utils;

// public API
pub mod body;
pub mod extract;
pub mod guard;
pub mod middleware;
pub mod respond;
pub mod web;
