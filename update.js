// Evaluated by Github Acitons
// This script updates the data

// Importing libraries
const fs = require('fs');

// Variables
const fetchPrograms = [];
const FETCH_PROGRAMS_THREAD = "kaencrypted_7343c808792a8595a61dcb45dcbb52d9_2dca64586dabf6682bf8f0cd22cc9c5a55e1c088435887bb6e7eeba5f6ac4abc7312aba34a05466323b7c529ad054e5ecd3b49b855a6d430944531a9150ac1b826b02449243511ef34c77bea134997c4b0d42deb9353c26cb7dea66922362caf012b1d1a36d1d9cba16c6a6729636cb7c7ed68f494a412261aae9195ecd4b509";

function getFetchPrograms() {
  const post = { "operationName": "getFeedbackRepliesPage", "variables": { "postKey": FETCH_PROGRAMS_THREAD, "limit": 1000000 }, "query": "query getFeedbackRepliesPage($postKey: String!, $cursor: String, $limit: Int!) {\n  feedbackRepliesPaginated(feedbackKey: $postKey, cursor: $cursor, limit: $limit) {\n    cursor\n    isComplete\n    feedback {\n      expandKey\n      appearsAsDeleted\n      author {\n        id\n        kaid\n        nickname\n        avatar {\n          name\n          imageSrc\n          __typename\n        }\n        __typename\n      }\n      content\n      date\n      definitelyNotSpam\n      deleted\n      downVoted\n      expandKey\n      feedbackType\n      flaggedBy\n      flaggedByUser\n      flags\n      focusUrl\n      fromVideoAuthor\n      key\n      lowQualityScore\n      notifyOnAnswer\n      permalink\n      qualityKind\n      replyCount\n      replyExpandKeys\n      showLowQualityNotice\n      sumVotesIncremented\n      upVoted\n      __typename\n    }\n    __typename\n  }\n}\n" };
  fetch('https://www.khanacademy.org/api/internal/graphql/getFeedbackRepliesPage', {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.text())
    .then((body) => {
      var data = JSON.parse(body).data.feedbackRepliesPaginated.feedback;
      for (var i = 0; i < data.length; i++) {
        fetchPrograms.push({ id: parseInt(data[i].content.split(":")[1].split("}")[0]) });
      }
      run();
    });
}

getFetchPrograms();

var mainCallbackCalls = Infinity;
var forksCallbackCalls = Infinity;
var feedbacksCallbackCalls = Infinity;
var questionsCallbackCalls = Infinity;

var cancelledCrons = 0;

function getDateTime(withSecondsAndFormatted) {
  var date = new Date(Date.now());
  var year = date.getUTCFullYear();
  var month = date.getUTCMonth();
  var day = date.getUTCDate();
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var seconds;
  if (withSecondsAndFormatted) {
    seconds = date.getUTCSeconds();
  }

  if (String(month).split("").length === 1) {
    month = "0" + String(parseInt(month) + 1);
  }
  if (String(day).split("").length === 1) {
    day = "0" + day;
  }
  if (String(hours).split("").length === 1) {
    hours = "0" + hours;
  }
  if (String(minutes).split("").length === 1) {
    minutes = "0" + minutes;
  }
  if (String(seconds).split("").length === 1) {
    seconds = "0" + seconds;
  }

  if (withSecondsAndFormatted) {
    return String(day) + "-" + String(month) + "-" + String(year) + " " + String(hours) + ":" + String(minutes) + ":" + String(seconds);
  }
  else {
    return String(year) + String(month) + String(day) + String(hours) + String(minutes);
  }
}

function fetchMain(id, callback) {
  const post = { "operationName": "programQuery", "query": "query programQuery($programId: String!) {\n  programById(id: $programId) {\n    byChild\n    category\n    created\n    creatorProfile: author {\n      id\n      nickname\n      profileRoot\n      profile {\n        accessLevel\n        __typename\n      }\n      __typename\n    }\n    deleted\n    description\n    spinoffCount: displayableSpinoffCount\n    docsUrlPath\n    flags\n    flaggedBy: flaggedByKaids\n    flaggedByUser: isFlaggedByCurrentUser\n    height\n    hideFromHotlist\n    id\n    imagePath\n    isProjectOrFork: originIsProject\n    isOwner\n    kaid: authorKaid\n    key\n    newUrlPath\n    originScratchpad: originProgram {\n      deleted\n      translatedTitle\n      url\n      __typename\n    }\n    restrictPosting\n    revision: latestRevision {\n      id\n      code\n      configVersion\n      created\n      editorType\n      folds\n      __typename\n    }\n    slug\n    sumVotesIncremented\n    title\n    topic: parentCurationNode {\n      id\n      nodeSlug: slug\n      relativeUrl\n      slug\n      translatedTitle\n      __typename\n    }\n    translatedTitle\n    url\n    userAuthoredContentType\n    upVoted\n    width\n    __typename\n  }\n}\n", "variables": { "programId": String(id) } };
  fetch('https://www.khanacademy.org/api/internal/graphql/programQuery', {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.text())
    .then((body) => {
      callback(id, JSON.parse(body).data.programById);
    });
}
function fetchForks(id, callback) {
  const post = { "operationName": "listTopProgramSpinoffs", "query": "query listTopProgramSpinoffs($pageInfo: ListProgramsPageInfo, $from: SpinoffOrigin!, $sort: ListProgramSortOrder) {\n  listTopProgramSpinoffs(pageInfo: $pageInfo, from: $from, sort: $sort) {\n    complete\n    cursor\n    programs {\n      id\n      key\n      authorKaid\n      authorNickname\n      displayableSpinoffCount\n      imagePath\n      sumVotesIncremented\n      translatedTitle: title\n      url\n      __typename\n    }\n    __typename\n  }\n}\n", "variables": { "sort": "TOP", "from": { "kind": "PROGRAM", "programOrContentId": String(id) }, "pageInfo": { "cursor": "", "itemsPerPage": 1000000 } } };

  fetch('https://www.khanacademy.org/api/internal/graphql/listTopProgramSpinoffs', {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.text())
    .then((body) => {
      callback(id, JSON.parse(body).data.listTopProgramSpinoffs);
    });
}
function fetchFeedbacks(id, callback, _key, _temp, _calls) {
  var post;
  if (_key !== undefined) {
    post = { "operationName": "feedbackQuery", "variables": { "topicId": String(id), "feedbackType": "COMMENT", "currentSort": 1, "focusKind": "scratchpad", "cursor": String(_key) }, "query": "query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {\n  feedback(focusId: $topicId, cursor: $cursor, limit: $limit, feedbackType: $feedbackType, focusKind: $focusKind, sort: $currentSort, qaExpandKey: $qaExpandKey, answersLimit: 1) {\n    feedback {\n      isLocked\n      replyCount\n      appearsAsDeleted\n      author {\n        id\n        kaid\n        nickname\n        avatar {\n          name\n          imageSrc\n          __typename\n        }\n        __typename\n      }\n      badges {\n        name\n        icons {\n          smallUrl\n          __typename\n        }\n        description\n        __typename\n      }\n      content\n      date\n      definitelyNotSpam\n      deleted\n      downVoted\n      expandKey\n      feedbackType\n      flaggedBy\n      flaggedByUser\n      flags\n      focusUrl\n      focus {\n        kind\n        id\n        translatedTitle\n        relativeUrl\n        __typename\n      }\n      fromVideoAuthor\n      key\n      lowQualityScore\n      notifyOnAnswer\n      permalink\n      qualityKind\n      replyCount\n      replyExpandKeys\n      showLowQualityNotice\n      sumVotesIncremented\n      upVoted\n      ... on QuestionFeedback {\n        hasAnswered\n        answers {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        isOld\n        answerCount\n        __typename\n      }\n      ... on AnswerFeedback {\n        question {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    cursor\n    isComplete\n    sortedByDate\n    __typename\n  }\n}\n" };
  }
  else {
    post = { "operationName": "feedbackQuery", "variables": { "topicId": String(id), "feedbackType": "COMMENT", "currentSort": 1, "focusKind": "scratchpad" }, "query": "query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {\n  feedback(focusId: $topicId, cursor: $cursor, limit: $limit, feedbackType: $feedbackType, focusKind: $focusKind, sort: $currentSort, qaExpandKey: $qaExpandKey, answersLimit: 1) {\n    feedback {\n      isLocked\n      replyCount\n      appearsAsDeleted\n      author {\n        id\n        kaid\n        nickname\n        avatar {\n          name\n          imageSrc\n          __typename\n        }\n        __typename\n      }\n      badges {\n        name\n        icons {\n          smallUrl\n          __typename\n        }\n        description\n        __typename\n      }\n      content\n      date\n      definitelyNotSpam\n      deleted\n      downVoted\n      expandKey\n      feedbackType\n      flaggedBy\n      flaggedByUser\n      flags\n      focusUrl\n      focus {\n        kind\n        id\n        translatedTitle\n        relativeUrl\n        __typename\n      }\n      fromVideoAuthor\n      key\n      lowQualityScore\n      notifyOnAnswer\n      permalink\n      qualityKind\n      replyCount\n      replyExpandKeys\n      showLowQualityNotice\n      sumVotesIncremented\n      upVoted\n      ... on QuestionFeedback {\n        hasAnswered\n        answers {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        isOld\n        answerCount\n        __typename\n      }\n      ... on AnswerFeedback {\n        question {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    cursor\n    isComplete\n    sortedByDate\n    __typename\n  }\n}\n" };
  }

  if (_calls === undefined) {
    _calls = 0;
  }
  _calls++;

  fetch('https://www.khanacademy.org/api/internal/graphql/feedbackQuery', {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.text())
    .then((body) => {
      if (JSON.parse(body).data.feedback.isComplete || _calls > 10) {
        if (_temp === undefined) {
          callback(id, JSON.parse(body).data.feedback.feedback);
        }
        else {
          callback(id, _temp.concat(JSON.parse(body).data.feedback.feedback));
        }
      }
      else {
        if (_temp === undefined) {
          fetchFeedbacks(id, callback, JSON.parse(body).data.feedback.cursor, JSON.parse(body).data.feedback.feedback, _calls);
        }
        else {
          fetchFeedbacks(id, callback, JSON.parse(body).data.feedback.cursor, _temp.concat(JSON.parse(body).data.feedback.feedback), _calls);
        }
      }
    });
}
function fetchQuestions(id, callback, _key, _temp, _calls) {
  var post;
  if (_key === undefined) {
    post = { "operationName": "feedbackQuery", "variables": { "topicId": String(id), "feedbackType": "QUESTION", "currentSort": 1, "focusKind": "scratchpad" }, "query": "query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {\n  feedback(focusId: $topicId, cursor: $cursor, limit: $limit, feedbackType: $feedbackType, focusKind: $focusKind, sort: $currentSort, qaExpandKey: $qaExpandKey, answersLimit: 1) {\n    feedback {\n      isLocked\n      replyCount\n      appearsAsDeleted\n      author {\n        id\n        kaid\n        nickname\n        avatar {\n          name\n          imageSrc\n          __typename\n        }\n        __typename\n      }\n      badges {\n        name\n        icons {\n          smallUrl\n          __typename\n        }\n        description\n        __typename\n      }\n      content\n      date\n      definitelyNotSpam\n      deleted\n      downVoted\n      expandKey\n      feedbackType\n      flaggedBy\n      flaggedByUser\n      flags\n      focusUrl\n      focus {\n        kind\n        id\n        translatedTitle\n        relativeUrl\n        __typename\n      }\n      fromVideoAuthor\n      key\n      lowQualityScore\n      notifyOnAnswer\n      permalink\n      qualityKind\n      replyCount\n      replyExpandKeys\n      showLowQualityNotice\n      sumVotesIncremented\n      upVoted\n      ... on QuestionFeedback {\n        hasAnswered\n        answers {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        isOld\n        answerCount\n        __typename\n      }\n      ... on AnswerFeedback {\n        question {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    cursor\n    isComplete\n    sortedByDate\n    __typename\n  }\n}\n" };
  }
  else {
    post = { "operationName": "feedbackQuery", "variables": { "topicId": String(id), "feedbackType": "QUESTION", "currentSort": 1, "focusKind": "scratchpad", "cursor": String(_key) }, "query": "query feedbackQuery($topicId: String!, $focusKind: String!, $cursor: String, $limit: Int, $feedbackType: FeedbackType!, $currentSort: Int, $qaExpandKey: String) {\n  feedback(focusId: $topicId, cursor: $cursor, limit: $limit, feedbackType: $feedbackType, focusKind: $focusKind, sort: $currentSort, qaExpandKey: $qaExpandKey, answersLimit: 1) {\n    feedback {\n      isLocked\n      replyCount\n      appearsAsDeleted\n      author {\n        id\n        kaid\n        nickname\n        avatar {\n          name\n          imageSrc\n          __typename\n        }\n        __typename\n      }\n      badges {\n        name\n        icons {\n          smallUrl\n          __typename\n        }\n        description\n        __typename\n      }\n      content\n      date\n      definitelyNotSpam\n      deleted\n      downVoted\n      expandKey\n      feedbackType\n      flaggedBy\n      flaggedByUser\n      flags\n      focusUrl\n      focus {\n        kind\n        id\n        translatedTitle\n        relativeUrl\n        __typename\n      }\n      fromVideoAuthor\n      key\n      lowQualityScore\n      notifyOnAnswer\n      permalink\n      qualityKind\n      replyCount\n      replyExpandKeys\n      showLowQualityNotice\n      sumVotesIncremented\n      upVoted\n      ... on QuestionFeedback {\n        hasAnswered\n        answers {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        isOld\n        answerCount\n        __typename\n      }\n      ... on AnswerFeedback {\n        question {\n          replyCount\n          appearsAsDeleted\n          author {\n            id\n            kaid\n            nickname\n            avatar {\n              name\n              imageSrc\n              __typename\n            }\n            __typename\n          }\n          badges {\n            name\n            icons {\n              smallUrl\n              __typename\n            }\n            description\n            __typename\n          }\n          content\n          date\n          definitelyNotSpam\n          deleted\n          downVoted\n          expandKey\n          feedbackType\n          flaggedBy\n          flaggedByUser\n          flags\n          focusUrl\n          focus {\n            kind\n            id\n            translatedTitle\n            relativeUrl\n            __typename\n          }\n          fromVideoAuthor\n          key\n          lowQualityScore\n          notifyOnAnswer\n          permalink\n          qualityKind\n          replyCount\n          replyExpandKeys\n          showLowQualityNotice\n          sumVotesIncremented\n          upVoted\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    cursor\n    isComplete\n    sortedByDate\n    __typename\n  }\n}\n" };
  }

  if (_calls === undefined) {
    _calls = 0;
  }
  _calls++;

  fetch('https://www.khanacademy.org/api/internal/graphql/feedbackQuery', {
    method: "POST",
    body: JSON.stringify(post),
  })
    .then((response) => response.text())
    .then((body) => {
      //callback(id, JSON.parse(body));
      if (JSON.parse(body).data.feedback.isComplete || _calls > 10) {
        if (_temp === undefined) {
          callback(id, JSON.parse(body).data.feedback.feedback);
        }
        else {
          callback(id, _temp.concat(JSON.parse(body).data.feedback.feedback));
        }
      }
      else {
        if (_temp === undefined) {
          fetchQuestions(id, callback, JSON.parse(body).data.feedback.cursor, JSON.parse(body).data.feedback.feedback, _calls);
        }
        else {
          fetchQuestions(id, callback, JSON.parse(body).data.feedback.cursor, _temp.concat(JSON.parse(body).data.feedback.feedback), _calls);
        }
      }
    });
}

function run() {
  if (cancelledCrons > 5) {
    mainCallbackCalls = Infinity;
    forksCallbackCalls = Infinity;
    feedbacksCallbackCalls = Infinity;
    questionsCallbackCalls = Infinity;
  }
  if (mainCallbackCalls !== Infinity || forksCallbackCalls !== Infinity || feedbacksCallbackCalls !== Infinity || questionsCallbackCalls !== Infinity) {
    cancelledCrons++;
    console.log("\033[1;31m" + "\nCron cancelled: " + getDateTime(true) + "\033[22;37m");
    return
  }

  console.log("\033[1m" + "\nNew cron: " + getDateTime(true) + "\033[22m");

  cancelledCrons = 0;

  mainCallbackCalls = 0;
  forksCallbackCalls = 0;
  feedbacksCallbackCalls = 0;
  questionsCallbackCalls = 0;

  function mainCallback(id, data) {
    mainCallbackCalls++;
    if (mainCallbackCalls === fetchPrograms.length) {
      console.log(" > " + getDateTime(true) + " - \033[32m" + "MAIN DONE" + "\033[37m");
      mainCallbackCalls = Infinity;

      setTimeout(function() {
        fs.rmSync("logs/main", { recursive: true, force: true });
        fs.renameSync("logs/temp-main", "logs/main");
      }, 1000);
    }

    try {
      var json = {
        title: data.translatedTitle,
        author: {
          nickname: data.creatorProfile.nickname,
          link: "https://www.khanacademy.org" + data.creatorProfile.profileRoot,
        },
        size: {
          width: data.width,
          height: data.height,
        },
        link: "https://www.khanacademy.org" + data.url,
        img: "https://www.khanacademy.org" + data.imagePath,
        created: data.created,
        flags: {
          flags: data.flags,
          flaggedBy: data.flaggedBy
        },
        type: data.revision.editorType,
        code: data.revision.code,
        voteCount: data.sumVotesIncremented,
        forkCount: data.spinoffCount,
      };

      /*try {
          fs.rmSync("./main", { recursive: true, force: true });
      }
      catch(er) {}*/

      if (!fs.existsSync("logs")) {
        fs.mkdirSync("logs");
      }
      if (!fs.existsSync("logs/temp-main")) {
        fs.mkdirSync("logs/temp-main");
      }

      var w = fs.createWriteStream("logs/temp-main/" + String(id) + "-" + getDateTime(false) + ".txt");
      w.write("function loadSketchAPIMain() {\n    return " + JSON.stringify(json).replaceAll("<", "&lt;") + ";\n}");
      w.end();
    }
    catch (er) { }
  }
  function forksCallback(id, data) {
    forksCallbackCalls++;
    if (forksCallbackCalls === fetchPrograms.length) {
      console.log(" > " + getDateTime(true) + " - \033[32m" + "FORKS DONE" + "\033[37m");
      forksCallbackCalls = Infinity;

      setTimeout(function() {
        fs.rmSync("logs/forks", { recursive: true, force: true });
        fs.renameSync("logs/temp-forks", "logs/forks");
      }, 1000);
    }

    try {
      var json = [];
      for (var i = 0; i < data.programs.length; i++) {
        json.push({
          title: data.programs[i].translatedTitle,
          author: {
            nickname: data.programs[i].authorNickname,
            link: "https://www.khanacademy.org/profile/" + data.programs[i].authorKaid,
          },
          link: "https://www.khanacademy.org" + data.programs[i].url,
          img: "https://www.khanacademy.org" + data.programs[i].imagePath,
          voteCount: data.programs[i].sumVotesIncremented,
          forkCount: data.programs[i].displayableSpinoffCount,
        });
      }

      if (!fs.existsSync("logs")) {
        fs.mkdirSync("logs");
      }
      if (!fs.existsSync("logs/temp-forks")) {
        fs.mkdirSync("logs/temp-forks");
      }

      var w = fs.createWriteStream("logs/temp-forks/" + String(id) + "-" + getDateTime(false) + ".txt");
      w.write("function loadSketchAPIForks() {\n    return " + JSON.stringify(json).replaceAll("<", "&lt;") + ";\n}");
      w.end();
    }
    catch (er) { }
  }
  function feedbacksCallback(id, data) {
    feedbacksCallbackCalls++;

    if (feedbacksCallbackCalls === fetchPrograms.length) {
      console.log(" > " + getDateTime(true) + " - \033[32m" + "FEEDBACKS DONE" + "\033[37m");
      feedbacksCallbackCalls = Infinity;

      setTimeout(function() {
        fs.rmSync("logs/feedbacks", { recursive: true, force: true });
        fs.renameSync("logs/temp-feedbacks", "logs/feedbacks");
      }, 1000);
    }

    try {
      var json = [];
      for (var i = 0; i < data.length; i++) {
        json.push({
          content: data[i].content,
          author: {
            nickname: data[i].author.nickname,
            link: "https://www.khanacademy.org/profile/" + data[i].author.kaid,
            avatar: "https://www.khanacademy.org" + data[i].author.avatar.imageSrc,
          },
          posted: data[i].date,
          expandKey: data[i].expandKey,
          flags: {
            flags: data[i].flags,
            flaggedBy: data[i].flaggedBy,
          },
          replyCount: data[i].replyCount,
          voteCount: data[i].sumVotesIncremented,
        });
      }

      if (!fs.existsSync("logs")) {
        fs.mkdirSync("logs");
      }
      if (!fs.existsSync("logs/temp-feedbacks")) {
        fs.mkdirSync("logs/temp-feedbacks");
      }

      var w = fs.createWriteStream("logs/temp-feedbacks/" + String(id) + "-" + getDateTime(false) + ".txt");
      w.write("function loadSketchAPIFeedbacks() {\n    return " + JSON.stringify(json).replaceAll("<", "&lt;") + ";\n}");
      w.end();
    }
    catch (er) { }
  }
  function questionsCallback(id, data) {
    questionsCallbackCalls++;
    if (questionsCallbackCalls === fetchPrograms.length) {
      console.log(" > " + getDateTime(true) + " - \033[32m" + "QUESTIONS DONE" + "\033[37m");
      questionsCallbackCalls = Infinity;

      setTimeout(function() {
        fs.rmSync("logs/questions", { recursive: true, force: true });
        fs.renameSync("logs/temp-questions", "logs/questions");
      }, 1000);
    }

    try {
      var json = [];
      for (var i = 0; i < data.length; i++) {
        json.push({
          content: data[i].content,
          author: {
            nickname: data[i].author.nickname,
            link: "https://www.khanacademy.org/profile/" + data[i].author.kaid,
            avatar: "https://www.khanacademy.org" + data[i].author.avatar.imageSrc,
          },
          posted: data[i].date,
          expandKey: data[i].expandKey,
          flags: {
            flags: data[i].flags,
            flaggedBy: data[i].flaggedBy,
          },
          voteCount: data[i].sumVotesIncremented,
        });

        try {
          json[i].answer = {
            content: data[i].answers[0].content,
            author: {
              nickname: data[i].answers[0].author.nickname,
              link: "https://www.khanacademy.org/profile/" + data[i].answers[0].author.kaid,
              avatar: "https://www.khanacademy.org" + data[i].answers[0].author.avatar.imageSrc,
            },
            posted: data[i].answers[0].date,
            expandKey: data[i].answers[0].expandKey,
            flags: {
              flags: data[i].answers[0].flags,
              flaggedBy: data[i].answers[0].flaggedBy,
            },
            voteCount: data[i].answers[0].sumVotesIncremented,
          };
        }
        catch (er) { }
      }

      if (!fs.existsSync("logs")) {
        fs.mkdirSync("logs");
      }
      if (!fs.existsSync("logs/temp-questions")) {
        fs.mkdirSync("logs/temp-questions");
      }

      var w = fs.createWriteStream("logs/temp-questions/" + String(id) + "-" + getDateTime(false) + ".txt");
      w.write("function loadSketchAPIFeedbacks() {\n    return " + JSON.stringify(json).replaceAll("<", "&lt;") + ";\n}");
      w.end();
    } catch (er) { }
  }

  for (var i = 0; i < fetchPrograms.length; i++) {
    console.log(" > " + getDateTime(true) + " - Loading " + String(i + 1) + ". program data");

    fetchMain(fetchPrograms[i].id, mainCallback);
    fetchForks(fetchPrograms[i].id, forksCallback);
    fetchFeedbacks(fetchPrograms[i].id, feedbacksCallback);
    fetchQuestions(fetchPrograms[i].id, questionsCallback);
  }
}

setTimeout(60000, function() {});
