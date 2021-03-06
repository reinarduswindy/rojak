define({ "api": [
  {
    "type": "get",
    "url": "/candidates/:candidateId",
    "title": "Get a Candidate",
    "group": "Candidates",
    "name": "GetCandidate",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "candidateId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "embed[]",
            "description": "<p>Fields to embed on the response. Available fields: <code>sentiments</code>, <code>candidates</code> </br></br> Example: <pre>?embed[]=field1&amp;embed[]=field2</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a candidates based on {candidateId}, optionally with <code>sentiments</code> and <code>pairing</code>.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"full_name\": \"Basuki Tjahaja Purnama\",\n      \"alias_name\": \"Ahok\",\n      \"place_of_birth\": \"Manggar, Belitung Timur\",\n      \"date_of_birth\": \"1966-06-29\",\n      \"religion\": \"Kristen Protestan\",\n      \"website_url\": \"http://ahok.org\",\n      \"photo_url\": \"https://upload.wikimedia.org/wikipedia/id/7/7a/Gubernur_DKI_Basuki.jpg\",\n      \"fbpage_username\": \"AhokBTP\",\n      \"twitter_username\": \"basuki_btp\",\n      \"instagram_username\": \"basukibtp\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      },\n      \"pairing\": {\n         \"id\": 3,\n         \"name\": \"Agus Sylvi\",\n         \"cagub_id\": 5,\n         \"cawagub_id\": 6,\n         \"website_url\": \"http://relawanagussylvi.com\",\n         \"logo_url\": \"https://pbs.twimg.com/profile_images/783564904460460032/VgVxZX-l.jpg\",\n         \"fbpage_username\": \"RelawanAgusSylvi\",\n         \"twitter_username\": \"RelAgusSylvi\",\n         \"instagram_username\": \"\",\n         \"slogan\": \"Jakarta Untuk Rakyat\",\n         \"description\": \"\",\n         \"inserted_at\": 1341533193,\n         \"updated_at\": 1341533193\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Item Not Found",
          "content": "HTTP/1.1 404 Not Found\n[\n  { \n    \"message\" : \"item not found\" \n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/candidate/candidate_controller.ex",
    "groupTitle": "Candidates"
  },
  {
    "type": "get",
    "url": "/candidates/:candidateId/media-sentiments",
    "title": "Get Media-Sentiments",
    "group": "Candidates",
    "name": "GetCandidateMediaSentiments",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "candidateId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Skip over a number of elements by specifying an offset value for the query. </br></br> Example: <pre>?offset=20</pre></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit the number of elements on the response. </br></br> Example: <pre>?limit=20</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a breakdown of media sentiments for this candidate.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"name\": \"detikcom\",\n      \"website_url\": \"http://detik.com\",\n      \"logo_url\": \"https://cdn.detik.net.id/detik2/images/logodetikcom.png?1\",\n      \"fbpage_username\": \"detikcom\",\n      \"twitter_username\": \"detikcom\",\n      \"instagram_username\": \"detikcom\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/candidate/candidate_controller.ex",
    "groupTitle": "Candidates"
  },
  {
    "type": "get",
    "url": "/candidates",
    "title": "Get Candidates",
    "group": "Candidates",
    "name": "GetCandidates",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "embed[]",
            "description": "<p>Fields to embed on the response. Available fields: <code>sentiments</code> </br></br> Example: <pre>?embed[]=field1&amp;embed[]=field2</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a list of candidates running in the election, optionally with <code>sentiments</code>.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"full_name\": \"Basuki Tjahaja Purnama\",\n      \"alias_name\": \"Ahok\",\n      \"place_of_birth\": \"Manggar, Belitung Timur\",\n      \"date_of_birth\": \"1966-06-29\",\n      \"religion\": \"Kristen Protestan\",\n      \"website_url\": \"http://ahok.org\",\n      \"photo_url\": \"https://upload.wikimedia.org/wikipedia/id/7/7a/Gubernur_DKI_Basuki.jpg\",\n      \"fbpage_username\": \"AhokBTP\",\n      \"twitter_username\": \"basuki_btp\",\n      \"instagram_username\": \"basukibtp\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      }\n  },\n  {\n      \"id\": 2,\n      \"full_name\": \"Anies Baswedan\",\n      \"alias_name\": \"Anies\",\n      \"place_of_birth\": \"Kuningan\",\n      \"date_of_birth\": \"1969-05-07\",\n      \"religion\": \"Islam\",\n      \"website_url\": \"http://aniesbaswedan.com\",\n      \"photo_url\": \"https://upload.wikimedia.org/wikipedia/commons/e/eb/Anies-baswedan-Dec-2010.jpg\",\n      \"fbpage_username\": \"aniesbaswedan\",\n      \"twitter_username\": \"aniesbaswedan\",\n      \"instagram_username\": \"aniesbaswedan\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/candidate/candidate_controller.ex",
    "groupTitle": "Candidates"
  },
  {
    "type": "get",
    "url": "/media/:mediaId",
    "title": "Get a Media",
    "group": "Media",
    "name": "GetAMedia",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaId",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>Get a media based on {mediaId}.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"name\": \"detikcom\",\n      \"website_url\": \"http://detik.com\",\n      \"logo_url\": \"https://cdn.detik.net.id/detik2/images/logodetikcom.png?1\",\n      \"fbpage_username\": \"detikcom\",\n      \"twitter_username\": \"detikcom\",\n      \"instagram_username\": \"detikcom\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Item Not Found",
          "content": "HTTP/1.1 404 Not Found\n[\n  { \n      \"message\" : \"item not found\" \n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/media/media_controller.ex",
    "groupTitle": "Media"
  },
  {
    "type": "get",
    "url": "/media",
    "title": "Get Media",
    "group": "Media",
    "name": "GetMedia",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Skip over a number of elements by specifying an offset value for the query. </br></br> Example: <pre>?offset=20</pre></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit the number of elements on the response. </br></br> Example: <pre>?limit=20</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a list of media.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"name\": \"detikcom\",\n      \"website_url\": \"http://detik.com\",\n      \"logo_url\": \"https://cdn.detik.net.id/detik2/images/logodetikcom.png?1\",\n      \"fbpage_username\": \"detikcom\",\n      \"twitter_username\": \"detikcom\",\n      \"instagram_username\": \"detikcom\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/media/media_controller.ex",
    "groupTitle": "Media"
  },
  {
    "type": "get",
    "url": "/media/:mediaId/sentiments",
    "title": "Get Media-Sentiments",
    "group": "Media",
    "name": "GetMediaSentiments",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaId",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>Get a breakdown of sentiments for each pairing and candidate by this media.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"pairing\": {\n          \"id\": 3,\n          \"name\": \"Agus Sylvi\",\n          \"cagub_id\": 5,\n          \"cawagub_id\": 6,\n          \"website_url\": \"http://relawanagussylvi.com\",\n          \"logo_url\": \"https://pbs.twimg.com/profile_images/783564904460460032/VgVxZX-l.jpg\",\n          \"fbpage_username\": \"RelawanAgusSylvi\",\n          \"twitter_username\": \"RelAgusSylvi\",\n          \"instagram_username\": \"\",\n          \"slogan\": \"Jakarta Untuk Rakyat\",\n          \"description\": \"\",\n          \"inserted_at\": 1341533193,\n          \"updated_at\": 1341533193,\n          \"sentiments\": {\n              \"positive\": 0.41256,\n              \"negative\": 0.12345,\n              \"neutral\": 0.46399\n          }\n      },\n      \"candidates\": {\n          \"cagub\": {\n              \"id\": 3,\n              \"full_name\": \"Agus Harimurti Yudhoyono\",\n              \"alias_name\": \"Agus Yudhoyono\",\n              \"place_of_birth\": \"Bandung, Jawa Barat\",\n              \"date_of_birth\": \"1978-08-10\",\n              \"religion\": \"Islam\",\n              \"website_url\": \"\"\n              \"photo_url\": \"https://upload.wikimedia.org/wikipedia/commons/b/b7/Mayor_Infanteri_Agus_Harimurti_Yudhoyono%2C_M.Sc.%2C_MPA.png\",\n              \"fbpage_username\": \"\",\n              \"twitter_username\": \"agusyudhoyono\",\n              \"instagram_username\": \"agusyudhoyono\",\n              \"inserted_at\": 1341533193,\n              \"updated_at\": 1341533193,\n              \"sentiments\": {\n                  \"positive\": 0.41256,\n                  \"negative\": 0.12345,\n                  \"neutral\": 0.46399\n              }\n          },\n          \"cawagub\": {\n              \"id\": 4,\n              \"full_name\": \"Sylviana Murni\",\n              \"alias_name\": \"Sylvi\",\n              \"place_of_birth\": \"Jakarta\",\n              \"date_of_birth\": \"1958-10-11\",\n              \"religion\": \"Islam\",\n              \"website_url\": \"http://sylvianamurni.com\",\n              \"photo_url\": \"https://pbs.twimg.com/profile_images/781481260489125888/06iQrhGr.jpg\",\n              \"fbpage_username\": \"sylviana_murni\",\n              \"twitter_username\": \"sylviana_murni\",\n              \"instagram_username\": \"sylvianamurni_\",\n              \"inserted_at\": 1341533193,\n              \"updated_at\": 1341533193,\n              \"sentiments\": {\n                  \"positive\": 0.41256,\n                  \"negative\": 0.12345,\n                  \"neutral\": 0.46399\n              }\n          }\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/media/media_controller.ex",
    "groupTitle": "Media"
  },
  {
    "type": "get",
    "url": "/news/:newsId",
    "title": "Get a News",
    "group": "News",
    "name": "GetANews",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newsId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "embed[]",
            "description": "<p>Fields to embed on the response. Available fields: <code>mentions</code> </br></br> Example: <pre>?embed[]=field1&amp;embed[]=field2</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a news article based on {newsId}, optionally with mentioned candidates.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"mediaId\": 3,\n      \"title\": \"Kunjungan Presiden Jokowi ke Depok\",\n      \"url\": \"https://rojaktv.com/jokowi-jalan-jalan-ke-depok\",\n      \"author_name\": \"Anto\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"mentions\": [\n          {\n              \"id\": 1,\n              \"full_name\": \"Basuki Tjahaja Purnama\",\n              \"alias_name\": \"Ahok\",\n              \"place_of_birth\": \"Manggar, Belitung Timur\",\n              \"date_of_birth\": \"1966-06-29\",\n              \"religion\": \"Kristen Protestan\",\n              \"website_url\": \"http://ahok.org\",\n              \"photo_url\": \"https://upload.wikimedia.org/wikipedia/id/7/7a/Gubernur_DKI_Basuki.jpg\",\n              \"fbpage_username\": \"AhokBTP\",\n              \"twitter_username\": \"basuki_btp\",\n              \"instagram_username\": \"basukibtp\",\n              \"inserted_at\": 1341533193,\n              \"updated_at\": 1341533193,\n              \"sentiment\": {\n                  \"type\": \"positive\",\n                  \"score\": 0.123,\n              }\n          }\n      ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Item Not Found",
          "content": "HTTP/1.1 404 Not Found\n[\n  { \n    \"message\" : \"item not found\" \n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/news/news_controller.ex",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/news",
    "title": "Get News",
    "group": "News",
    "name": "GetNews",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "embed[]",
            "description": "<p>Fields to embed on the response. Available fields: <code>mentions</code> </br></br> Example: <pre>?embed[]=field1&amp;embed[]=field2</pre></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Skip over a number of elements by specifying an offset value for the query. </br></br> Example: <pre>?offset=20</pre></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit the number of elements on the response. </br></br> Example: <pre>?limit=20</pre></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "media_id[]",
            "description": "<p>Filter articles based on <code>id</code> of media. </br></br> Example: <pre>?media_id[]=1&amp;media_id[]=2</pre></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "candidate_id[]",
            "description": "<p>Filter articles based on <code>id</code> of mentioned candidates. </br></br> Example: <pre>?candidate_id[]=1&amp;candidate_id[]=2</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a list of news, optionally with mentioned candidates. Filterable by media and mentioned candidates.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"media_id\": 3,\n      \"title\": \"Kunjungan Presiden Jokowi ke Depok\",\n      \"url\": \"https://rojaktv.com/jokowi-jalan-jalan-ke-depok\",\n      \"author_name\": \"Anto\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"mentions\": [\n          {\n              \"id\": 1,\n              \"full_name\": \"Basuki Tjahaja Purnama\",\n              \"alias_name\": \"Ahok\",\n              \"place_of_birth\": \"Manggar, Belitung Timur\",\n              \"date_of_birth\": \"1966-06-29\",\n              \"religion\": \"Kristen Protestan\",\n              \"website_url\": \"http://ahok.org\",\n              \"photo_url\": \"https://upload.wikimedia.org/wikipedia/id/7/7a/Gubernur_DKI_Basuki.jpg\",\n              \"fbpage_username\": \"AhokBTP\",\n              \"twitter_username\": \"basuki_btp\",\n              \"instagram_username\": \"basukibtp\",\n              \"inserted_at\": 1341533193,\n              \"updated_at\": 1341533193,\n              \"sentiment\": {\n                  \"type\": \"positive\",\n                  \"score\": 0.123,\n              }\n          }\n      ]\n  },\n  {\n      \"id\": 2,\n      \"media_id\": 3,\n      \"title\": \"Budi Berpasangan dengan Ani\",\n      \"url\": \"https://rojaktv.com/budi-berpasangan-ani\",\n      \"author_name\": \"Anto\",\n      \"inserted_at\": 1341533201,\n      \"updated_at\": 1341533201,\n      \"mentions\": [\n          {\n              \"id\": 1,\n              \"full_name\": \"Basuki Tjahaja Purnama\",\n              \"alias_name\": \"Ahok\",\n              \"place_of_birth\": \"Manggar, Belitung Timur\",\n              \"date_of_birth\": \"1966-06-29\",\n              \"religion\": \"Kristen Protestan\",\n              \"website_url\": \"http://ahok.org\",\n              \"photo_url\": \"https://upload.wikimedia.org/wikipedia/id/7/7a/Gubernur_DKI_Basuki.jpg\",\n              \"fbpage_username\": \"AhokBTP\",\n              \"twitter_username\": \"basuki_btp\",\n              \"instagram_username\": \"basukibtp\",\n              \"inserted_at\": 1341533193,\n              \"updated_at\": 1341533193,\n              \"sentiment\": {\n                  \"type\": \"positive\",\n                  \"score\": 0.123,\n              }\n          }\n      ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/news/news_controller.ex",
    "groupTitle": "News"
  },
  {
    "type": "get",
    "url": "/pairings/:pairingId",
    "title": "Get a Pair",
    "group": "Pairings",
    "name": "GetPair",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pairingId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "embed[]",
            "description": "<p>Fields to embed on the response. Available fields: <code>sentiments</code>, <code>candidates</code> </br></br> Example: <pre>?embed[]=field1&amp;embed[]=field2</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a pair of candidates based on {pairingId}, optionally with <code>sentiments</code> and <code>candidates</code>.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 3,\n      \"name\": \"Agus Sylvi\",\n      \"cagub_id\": 5,\n      \"cawagub_id\": 6,\n      \"website_url\": \"http://relawanagussylvi.com\",\n      \"logo_url\": \"https://pbs.twimg.com/profile_images/783564904460460032/VgVxZX-l.jpg\",\n      \"fbpage_username\": \"RelawanAgusSylvi\",\n      \"twitter_username\": \"RelAgusSylvi\",\n      \"instagram_username\": \"\",\n      \"slogan\": \"Jakarta Untuk Rakyat\",\n      \"description\": \"\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      },\n      \"candidates\": {\n          \"cagub\" : {\n              \"id\": 3,\n              \"full_name\": \"Agus Harimurti Yudhoyono\",\n              \"alias_name\": \"Agus Yudhoyono\",\n              \"place_of_birth\": \"Bandung, Jawa Barat\",\n              \"date_of_birth\": \"1978-08-10\",\n              \"religion\": \"Islam\",\n              \"website_url\": \"\",\n              \"photo_url\": \"https://upload.wikimedia.org/wikipedia/commons/b/b7/Mayor_Infanteri_Agus_Harimurti_Yudhoyono%2C_M.Sc.%2C_MPA.png\",\n              \"fbpage_username\": \"\",\n              \"twitter_username\": \"agusyudhoyono\",\n              \"instagram_username\": \"agusyudhoyono\",\n              \"inserted_at\": 1341533193,\n              \"updated_at\": 1341533193\n          },\n          \"cawagub\" : {\n              \"id\": 4,\n              \"full_name\": \"Sylviana Murni\",\n              \"alias_name\": \"Sylvi\",\n              \"place_of_birth\": \"Jakarta\",\n              \"date_of_birth\": \"1958-10-11\",\n              \"religion\": \"Islam\",\n              \"website_url\": \"http://sylvianamurni.com\",\n              \"photo_url\": \"https://pbs.twimg.com/profile_images/781481260489125888/06iQrhGr.jpg\",\n              \"fbpage_username\": \"sylviana_murni\",\n              \"twitter_username\": \"sylviana_murni\",\n              \"instagram_username\": \"sylvianamurni_\",\n              \"inserted_at\": 1341533193,\n              \"updated_at\": 1341533193\n          }\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Item Not Found",
          "content": "HTTP/1.1 404 Not Found\n[\n  { \n    \"message\" : \"item not found\" \n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/pairing/pairing_controller.ex",
    "groupTitle": "Pairings"
  },
  {
    "type": "get",
    "url": "/pairings/:pairingId/media-sentiments",
    "title": "Get Media-Sentiments",
    "group": "Pairings",
    "name": "GetPairMediaSentiments",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pairingId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Skip over a number of elements by specifying an offset value for the query. </br></br> Example: <pre>?offset=20</pre></p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Limit the number of elements on the response. </br></br> Example: <pre>?limit=20</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a breakdown of media sentiments for this pairing.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"name\": \"detikcom\",\n      \"website_url\": \"http://detik.com\",\n      \"logo_url\": \"https://cdn.detik.net.id/detik2/images/logodetikcom.png?1\",\n      \"fbpage_username\": \"detikcom\",\n      \"twitter_username\": \"detikcom\",\n      \"instagram_username\": \"detikcom\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/pairing/pairing_controller.ex",
    "groupTitle": "Pairings"
  },
  {
    "type": "get",
    "url": "/pairings",
    "title": "Get Pairs",
    "group": "Pairings",
    "name": "GetPairs",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "embed[]",
            "description": "<p>Fields to embed on the response. Available fields: <code>sentiments</code> </br></br> Example: <pre>?embed[]=field1&amp;embed[]=field2</pre></p>"
          }
        ]
      }
    },
    "description": "<p>Get a list of pairs of candidates running in the election, optionally with <code>sentiments</code>.</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"name\": \"Ahok Djarot\",\n      \"cagub_id\": 1,\n      \"cawagub_id\": 2,\n      \"website_url\": \"http://ahokdjarot.id\",\n      \"logo_url\": \"http://ahokdjarot.id/themes/custom/jakartabaru/logo.png\",\n      \"fbpage_username\": \"AhokDjarot\",\n      \"twitter_username\": \"AhokDjarot\",\n      \"instagram_username\": \"ahokdjarot\",\n      \"slogan\": \"TETAP AHOK-DJAROT!\",\n      \"description\": \"Jangan biarkan Jakarta Baru berhenti sampai disini! Mari Bersama-sama Dukung Ahok & Djarot sebagai Cagub & Cawagub DKI Jakarta 2017.\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      }\n  },\n  {\n      \"id\": 2,\n      \"name\": \"Anies Sandi\",\n      \"cagub_id\": 3,\n      \"cawagub_id\": 4,\n      \"website_url\": \"\",\n      \"logo_url\": \"\",\n      \"fbpage_username\": \"\",\n      \"twitter_username\": \"\",\n      \"instagram_username\": \"\",\n      \"slogan\": \"\",\n      \"description\": \"\",\n      \"inserted_at\": 1341533193,\n      \"updated_at\": 1341533193,\n      \"sentiments\": {\n          \"positive\": 0.41256,\n          \"negative\": 0.12345,\n          \"neutral\": 0.46399\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "web/v1/pairing/pairing_controller.ex",
    "groupTitle": "Pairings"
  }
] });
