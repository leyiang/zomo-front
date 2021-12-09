* Homepage
  * Auth
    * login
    * register
      * able to use invitation code
      * validate email
    * carousel
    * categories
    * cms ?
    * blogroll
* Categories
  * http://localhost/blog/api/wp-json/wp/v2/categories
  * sort
    * favorite
    * like
    * comment
  * number of different categories
  * post - using card layout
    * Get all posts under categories
    * http://localhost/blog/api/wp-json/wp/v2/posts?categories=4
  * next level category
    * Get category and child info
    * DONE
  * description
    * DONE
* 专题 ?
* Details
  * author info
    * name
  ```php
  function post_author_callback( $post, $field_name, $request ) {
      $id = $post["author"];
  
      return array(
          "id" => $id,
          "nickname" => get_user_meta( $id, "nickname", true )
      );
  }
  ```
  * viewed times
  * liked times
  * comment numbers
  * crumb
  * suggest reading
    * GET NEWST 4? Posts
  * favorite
  * comment
    * reply comment
    * like comment
  * tag
  * post
    * share
* user
```php
add_action("rest_api_init", "adding_user_meta_rest");
  function adding_user_meta_rest() {
      register_rest_field("user", "meta", array(
          "get_callback" => "user_meta_callback",
          "update_callback" => null,
          "schema" => null
      ));
  }
  
  function user_meta_callback( $user, $field_name, $request ) {
      $meta = array();
      $keys = array(
          "nickname",
          "liked",
      );
  
      foreach ( $keys as $key ) {
          $meta[$key] = get_user_meta( $user["id"], $key, true );
      }
  
      return $meta;
  }
}
```
  * favorites
  * liked
  * modify
    * nickname
    * password
    * avatar
    * AUTHENTICATION
  * comment
    * content ?
    * AUTHENTICATION
  * points (award)
    * invite others
    * check in
  * Check In
* search
  * title
    * http://localhost/blog/api/wp-json/wp/v2/posts?search={title}
  * tag
    * http://localhost/blog/api/wp-json/wp/v2/posts?tags={int}
    * http://localhost/blog/api/wp-json/wp/v2/tags
  * history