## first time greet
* greet
  - utter_ask_how_doing
> check_asked_mood

## good mood positive panas affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "1"}
  - utter_happy_offer_chat
* affirm
  - utter_venting_group
> check_venting_group

## good mood positive panas affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "1"}
  - utter_happy_offer_chat
> check_venting_group

## good mood positive panas denied chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "1"}
  - utter_happy_offer_chat
* deny
  - utter_denied_chat
> check_non-venting_group

## good mood negative panas not bad anymore affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* deny
  - utter_happy_offer_chat
* affirm
  - utter_venting_group
> check_venting_group

## good mood negative panas not bad anymore affirmed chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* deny
  - utter_happy_offer_chat
> check_venting_group

## good mood negative panas not bad anymore denied chat
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* deny
  - utter_happy_offer_chat
* deny
  - utter_denied_chat
> check_non-venting_group

## good mood negative panas still bad affirmed
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* affirm
  - utter_venting_group
> check_venting_group

## good mood negative panas still bad affirmed
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
> check_venting_group

## good mood negative panas still bad denied skip to activity
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
* skip_to_activity
  - utter_skip_to_activity
> check_non-venting_group

## good mood negative panas still bad denied tell more
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
* tell_more
  - utter_venting_group
> check_venting_group

## good mood negative panas still bad denied tell more
> check_asked_mood
* mood_great
  - action_get_panas_score
  - slot{"panas_score" : "0"}
  - utter_negative_panas
* affirm
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
> check_venting_group

## bad mood denied skip to activity
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
* skip_to_activity
  - utter_skip_to_activity
> check_non-venting_group

## bad mood denied tell more
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
* tell_more
  - utter_venting_group
> check_venting_group

## bad mood denied tell more
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
* deny
  - utter_denied_why_bad
> check_venting_group

## bad mood affirmed
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
* affirm
  - utter_venting_group
> check_venting_group

## bad mood affirmed
> check_asked_mood
* mood_unhappy
  - utter_ask_why_bad
> check_venting_group

<!-- ## venting group
> check_venting_group
* share_problems
  - severity_form
  - form{"name": "severity_form"}
  - form{"name": null}
  - utter_slots_values

## venting group
> check_venting_group
* share_problems
  - severity_form
  - form{"name": "severity_form"}
* out_of_scope
  - severity_form
  - form{"name": "severity_form"}
  - form{"name": null}
  - utter_slots_values -->

## venting group
> check_venting_group
* share_problems{"sentiment" : "low"}
  - utter_low_severity

## venting group
> check_venting_group
* share_problems{"sentiment" : "moderate"}
  - utter_moderate_severity

## venting group
> check_venting_group
* share_problems{"sentiment" : "high"}
  - utter_high_severity

## say goodbye
* goodbye
  - utter_goodbye

## bot challenge
* bot_challenge
  - utter_iamabot

## insult
* insult
  - utter_respond_insult

## fallback story
* out_of_scope
  - action_default_ask_rephrase
