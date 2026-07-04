<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = ['user_id', 'title', 'first_name', 'last_name', 'phone', 'address_line_1', 'address_line_2', 'city', 'state', 'postal_code', 'country', 'is_default'];
}

class Order extends Model
{
    protected $fillable = ['user_id', 'order_number', 'status', 'subtotal', 'tax', 'shipping', 'discount', 'total'];
}

class Review extends Model
{
    protected $fillable = ['user_id', 'product_id', 'order_id', 'rating', 'comment', 'is_approved'];
}

class Wishlist extends Model
{
    protected $fillable = ['user_id'];
}

class Cart extends Model
{
    protected $fillable = ['user_id', 'session_id', 'coupon_code'];
}
