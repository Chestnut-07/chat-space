# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :groups, through: :groups-users
- has_many :chats

## groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|group_name|string|null: false|

## Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :chats

## groups_usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign_key: true|
|groups||integer|null: false, foreign_key: true|

### Assciation
- belongs_to :user
- belongs_to :group

## chatテーブル

|Colum|Type|Options|
|-----|----|-------|
|message|text|null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group