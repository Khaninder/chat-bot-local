## intent:greet
- hey
- hello
- hi
- good morning
- good evening
- hey there

## intent:introduction
- my name is [Alex](name)
- my name's [mary](name)
- call me [Kevin](name)
- [James](name)
- it's [Sarah](name)
- people call me [Christopher](name)
- [daniel](name) is my name
- I'm [Jackie](name)
- I'm [Martin](name)
- my names [Jeff](name)
- Darya

## intent:goodbye
- bye
- goodbye
- see you around
- see you later

## intent:affirm
- yes
- indeed
- of course
- that sounds good
- correct
- ok
- alright
- I can
- maybe
- ok here
- listen
- yea
- ya
- yeah
- okay
- sure
- yep
- yup
- yas
- no problem

## intent:deny
- no
- never
- I don't think so
- don't like that
- no way
- not really
- I don't want to
- nah
- na
- nope

## intent:mood_great
- perfect
- very good
- great
- amazing
- wonderful
- I am feeling very good
- I am great
- I'm good
- good
- not bad
- so good
- nice
- fine
- pretty good
- well
- couldn't be better

## intent:mood_unhappy
- sad
- very sad
- unhappy
- bad
- very bad
- awful
- terrible
- not very good
- not so well
- extremely sad
- so sad
- not well
- not good
- so so
- could be better

## intent:skip_to_activity
- yes, I'm sure. Let's skip to the activity
- skip
- activity
- i am sure
- i don't want to tell
- just skip
- i don't wanna talk
- won't tell
- don't want
- not tell
- i dont wanna talk
- no talk
- i don't wanna
- dont want to tell

## intent:tell_more
- no, I'd actually like to tell you about it
- ok i will tell you more
- will tell
- can tell
- like to tell you more

## intent:bot_challenge
- are you a bot?
- are you a human?
- am I talking to a bot?
- am I talking to a human?

## intent:share_problems
- i had a bad day at work
- i have problems at home
- i got in trouble
- i am okay overall, but somewhat worried
- i'm worried about
- a lot happened
- i'm overwhelmed
- [very mild]{"entity": "emotion_intensity", "value": "low"}
- [pretty chill]{"entity": "emotion_intensity", "value": "low"} about
- [not that important]{"entity": "emotion_intensity", "value": "low"}
- [don't feel intense]{"entity": "emotion_intensity", "value": "low"}
- [somewhat mild]{"entity": "emotion_intensity", "value": "low"} feeling
- [a bit nervous]{"entity": "emotion_intensity", "value": "moderate"}
- [a little worried]{"entity": "emotion_intensity", "value": "moderate"} about
- [somewhat irritable]{"entity": "emotion_intensity", "value": "moderate"}
- i feel [very intense]{"entity": "emotion_intensity", "value": "high"}
- i am [very anxious]{"entity": "emotion_intensity", "value": "high"}
- i'm [so ashamed]{"entity": "emotion_intensity", "value": "high"}
- it's been [very tough]{"entity": "emotion_intensity", "value": "high"}
- [extremely intense]{"entity": "emotion_intensity", "value": "high"}
- [was fired]{"entity": "emotion_intensity", "value": "high"}
- [extremely discouraged]{"entity": "emotion_intensity", "value": "high"}
- [very angry]{"entity": "emotion_intensity", "value": "high"} about
- [not bothersome]{"entity": "emotion_bother", "value": "a little"} at all
- [only a little bothersome]{"entity": "emotion_bother", "value": "a little"}
- [somewhat worried]{"entity": "emotion_bother", "value": "moderately"}
- [a little bothered]{"entity": "emotion_bother", "value": "moderately"}
- [moderately bothersome or distressing]{"entity": "emotion_bother", "value": "moderately"}
- [very distressing]{"entity": "emotion_bother", "value": "a lot"}
- [extremely distressing]{"entity": "emotion_bother", "value": "a lot"}
- I can still concentrate [just fine]{"entity": "emotion_impact", "value": "low"}
- I've found it [very easy to push]{"entity": "emotion_impact", "value": "low"} this from my mind when needed
- [I've occasionally noticed some minimal effects on my concentration]{"entity": "emotion_impact", "value": "low"}
- [I sometimes find these emotions quite distracting]{"entity": "emotion_impact", "value": "moderate"}
- [quite often, I have difficulty concentrating]{"entity": "emotion_impact", "value": "high"}
- [hard to get through tasks]{"entity": "emotion_impact", "value": "high"} because of these emotions
- [it’s all I can think about]{"entity": "emotion_impact", "value": "high"} lately
- I just can't seem to keep my mind off of it and its almost [impossible to focus]{"entity": "emotion_impact", "value": "high"} on my tasks

## intent:out_of_scope
- that's not what I want to do
- wait stop
- you're no help
- this is no help at all
- how old are you
- I want to order a pizza
- tell me the weather
- this isn't working
- I already told you that
- don't like that
- I don't want to tell you that
- none of your business
- that's not right
- stop asking
- nevermind
- I want to do something else
- I changed my mind
- stupid bot
- I don't want to talk to you

## synonym:a little
- not bothersome
- only a little bothersome

## synonym:a lot
- very distressing
- extremely distressing

## synonym:high
- intense
- very anxious
- extremely intense
- very angry
- quite often, I have difficulty concentrating
- Hard to get through tasks
- it’s all I can think about
- impossible to focus

## synonym:low
- very mild
- pretty chill
- not that important
- don't feel intense
- somewhat mild
- just fine
- very easy to push
- I've occasionally noticed some minimal effects on my concentration

## synonym:moderate
- I sometimes find these emotions quite distracting

## synonym:moderately
- moderately bothersome or distressing
