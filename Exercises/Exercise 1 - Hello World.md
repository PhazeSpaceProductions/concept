# Prerequisites

* github
* TODO: fork the skeleton, or copy it?
* TODO: do we have separate repos for the exercises?
* TODO: some kind of way of automating grabbing just the desired template
 * A web app that does it using github API?
 * A shell script? What about windows? mac?

# Preparation

* Clone the exercises
* Create a new empty repository
* Copy the 'bare' example


# Appendix

```
 curl -i https://api.github.com/repos/PhazeSpaceProductions/concept
 # returns a JSON blob duh
 git clone https://github.com/PhazeSpaceProductions/qdap4sf-exercises
```

Web app that:
(a) GETs the individual blobs
(b) Merges into a zip
(c) Gets user to download it ... ?

or

https://developer.github.com/v3/repos/contents/
https://stuk.github.io/jszip/

script using wget with the direct blob links
