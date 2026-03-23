const subjectSets = {
  junior: [
    { key: "chinese", label: "國文" },
    { key: "english", label: "英文" },
    { key: "math", label: "數學" },
    { key: "biology", label: "生物" },
    { key: "physicsChem", label: "理化" },
    { key: "earthScience", label: "地科" },
    { key: "history", label: "歷史" },
    { key: "geography", label: "地理" },
    { key: "civics", label: "公民" }
  ],
  senior: [
    { key: "chinese", label: "國文" },
    { key: "english", label: "英文" },
    { key: "mathA", label: "數學 A" },
    { key: "mathB", label: "數學 B" },
    { key: "physics", label: "物理" },
    { key: "chemistry", label: "化學" },
    { key: "biology", label: "生物" },
    { key: "earthScience", label: "地球科學" },
    { key: "history", label: "歷史" },
    { key: "geography", label: "地理" },
    { key: "civics", label: "公民與社會" }
  ]
};

const systemProfiles = {
  junior: {
    tag: "國中學制",
    title: "國中基礎科目分析",
    description: "以國文、英文、數學、生物、理化、地科、歷史、地理、公民為主，符合常見國中分科方式。",
    meta: "學習重點：先把弱科基礎補起來，再追求平均提升，尤其注意理科與社會科分開補強。"
  },
  senior: {
    tag: "高中學制",
    title: "高中分科能力分析",
    description: "以國文、英文、數學 A、數學 B、物理、化學、生物、地球科學、歷史、地理、公民與社會為主，貼近高中常見分科。",
    meta: "學習重點：注意數學 A / B 與自然、社會科深度差異，優先處理高比重與落差較大的科目。"
  }
};

const subjectAdvice = {
  chinese: {
    strong: "維持閱讀量與作文練習，持續整理佳句與段落結構，表達會更穩定。",
    medium: "加強字詞理解與閱讀題型整理，每週安排短篇閱讀與一篇短文寫作。",
    low: "先補基礎字詞、注釋與課文重點，再把錯題分成閱讀、字音字形、寫作三類補強。"
  },
  english: {
    strong: "持續透過文章與聽力素材累積語感，並定期複習單字避免遺忘。",
    medium: "把單字、文法、閱讀分開訓練，每天固定背誦與完成短篇閱讀。",
    low: "先從核心單字和基礎句型開始，建立每天固定練習，再慢慢加入閱讀與聽力。"
  },
  math: {
    strong: "保持題感，練習綜合題與速度，優先降低粗心失分。",
    medium: "整理常錯章節與公式應用，做完題目一定要重寫錯題解法。",
    low: "先把基本觀念與公式背熟，從例題和基礎題開始，不要直接跳難題。"
  },
  mathA: {
    strong: "保持題感，針對函數、向量、機率等重點單元做整合題訓練。",
    medium: "整理常錯章節與公式應用，做題後一定要重寫錯題解法。",
    low: "先把基本觀念與公式背熟，從例題和基礎題開始，不要直接跳難題。"
  },
  mathB: {
    strong: "維持穩定手感，強化應用題與資料判讀題的速度與準確度。",
    medium: "把章節概念、常見題型與易錯點整理成筆記，逐步穩定提分。",
    low: "先把基礎計算與核心概念讀熟，再從簡單題建立信心與熟悉度。"
  },
  physicsChem: {
    strong: "可以多做計算題與實驗判讀題，強化公式轉換與應用速度。",
    medium: "把公式、實驗步驟、常見題型分開整理，做題後回頭看錯因。",
    low: "先從基本觀念與常用公式開始，搭配例題建立固定解題步驟。"
  },
  physics: {
    strong: "多做混合題與計算題，強化公式轉換與情境應用。",
    medium: "先分章練習力學、電學等重點單元，建立公式使用條件。",
    low: "回到觀念圖與基本公式，把常見題型的解題步驟寫成固定流程。"
  },
  chemistry: {
    strong: "持續強化計算與反應判斷題，特別注意化學式與條件判讀。",
    medium: "將元素、反應類型、計量題分開複習，做完題目要回看錯因。",
    low: "先熟悉基本名詞、週期表與常見反應，再逐步練習計算題。"
  },
  biology: {
    strong: "適合往圖表整合與長題閱讀延伸，提升綜合理解能力。",
    medium: "用章節心智圖整理觀念，補足名詞辨識與系統流程。",
    low: "先從細胞、器官、系統等基本架構讀起，搭配圖像記憶。"
  },
  earthScience: {
    strong: "可加強圖表判讀、天氣與地質整合題，提升跨章節應用能力。",
    medium: "整理氣象、地質、天文三大主題，搭配圖表與關鍵概念一起複習。",
    low: "先從基本名詞、地層與天文現象讀起，利用圖像和流程圖建立理解。"
  },
  history: {
    strong: "維持事件脈絡與比較能力，可多練跨時代整合題。",
    medium: "把重大事件拆成背景、經過、影響三段，答題會更清楚。",
    low: "優先建立時間軸與重要人物事件對照表，先求脈絡清楚再細背。"
  },
  geography: {
    strong: "可多練地圖判讀與區域比較題，維持資料整合與定位能力。",
    medium: "把地形、氣候、產業與人口分開整理，建立區域比較表。",
    low: "先熟悉基本地圖、氣候特徵與區域分類，再透過題目反覆練習。"
  },
  civics: {
    strong: "持續練習制度比較與情境題，強化法規與公民概念整合。",
    medium: "把政府制度、權利義務、經濟概念分章整理，答題會更穩定。",
    low: "先建立基礎名詞與制度架構，再透過簡單題型熟悉觀念差異。"
  }
};

const gradeScale = {
  "A+": 98,
  A: 95,
  "A-": 90,
  "B+": 88,
  B: 85,
  "B-": 80,
  "C+": 78,
  C: 75,
  "C-": 70,
  "D+": 68,
  D: 65,
  "D-": 60,
  F: 0
};

const demoScores = {
  percent: {
    junior: { chinese: 82, english: 76, math: 68, biology: 74, physicsChem: 71, earthScience: 79, history: 83, geography: 80, civics: 85 },
    senior: { chinese: 80, english: 72, mathA: 65, mathB: 74, physics: 61, chemistry: 70, biology: 78, earthScience: 76, history: 84, geography: 79, civics: 81 }
  },
  level: {
    junior: { chinese: 12, english: 11, math: 9, biology: 10, physicsChem: 10, earthScience: 11, history: 12, geography: 11, civics: 13 },
    senior: { chinese: 11, english: 10, mathA: 8, mathB: 10, physics: 8, chemistry: 9, biology: 11, earthScience: 10, history: 12, geography: 11, civics: 11 }
  },
  grade: {
    junior: { chinese: "B+", english: "B", math: "C-", biology: "B-", physicsChem: "B-", earthScience: "B", history: "B+", geography: "B+", civics: "A-" },
    senior: { chinese: "B", english: "C+", mathA: "C-", mathB: "B-", physics: "D+", chemistry: "C", biology: "B-", earthScience: "B-", history: "A-", geography: "B", civics: "B+" }
  },
  custom: {
    junior: { chinese: 41, english: 38, math: 34, biology: 37, physicsChem: 35.5, earthScience: 39.5, history: 41.5, geography: 40, civics: 42.5 },
    senior: { chinese: 80, english: 72, mathA: 65, mathB: 74, physics: 61, chemistry: 70, biology: 78, earthScience: 76, history: 84, geography: 79, civics: 81 }
  }
};

const scoreModeConfig = {
  percent: {
    label: "百分制",
    min: 0,
    max: 100,
    step: 0.1,
    averageTitle: "總平均",
    placeholder: "請輸入 0 - 100"
  },
  level: {
    label: "級分制",
    min: 0,
    max: 15,
    step: 1,
    averageTitle: "平均級分",
    placeholder: "請輸入 0 - 15"
  },
  grade: {
    label: "字母等第",
    averageTitle: "等第換算平均",
    placeholder: "例如 A、B+、C-"
  }
};

const subjectInputs = document.getElementById("subjectInputs");
const scoreForm = document.getElementById("scoreForm");
const systemSwitch = document.getElementById("systemSwitch");
const scoreModeSelect = document.getElementById("scoreMode");
const gpaSystemSelect = document.getElementById("gpaSystem");
const customMaxField = document.getElementById("customMaxField");
const customMaxScoreInput = document.getElementById("customMaxScore");
const settingNote = document.getElementById("settingNote");
const schoolTag = document.getElementById("schoolTag");
const schoolTitle = document.getElementById("schoolTitle");
const schoolDescription = document.getElementById("schoolDescription");
const schoolMeta = document.getElementById("schoolMeta");
const formMessage = document.getElementById("formMessage");
const averageTitle = document.getElementById("averageTitle");
const averageValue = document.getElementById("averageValue");
const averageHint = document.getElementById("averageHint");
const gpaValue = document.getElementById("gpaValue");
const gpaHint = document.getElementById("gpaHint");
const bandValue = document.getElementById("bandValue");
const bandHint = document.getElementById("bandHint");
const overallAdvice = document.getElementById("overallAdvice");
const analysisList = document.getElementById("analysisList");
const fillDemoBtn = document.getElementById("fillDemo");
const resetScoresBtn = document.getElementById("resetScores");

let currentSystem = "junior";
let currentScoreMode = "percent";
let currentGpaSystem = "4.3";

function getMaxScore() {
  if (currentScoreMode === "custom") {
    const parsed = Number.parseFloat(customMaxScoreInput.value);
    if (!Number.isFinite(parsed) || parsed <= 0) {
      return 100;
    }
    return parsed;
  }

  if (currentScoreMode === "level") return 15;
  return 100;
}

function getMinScore() {
  if (currentScoreMode === "grade") return null;
  return 0;
}

function getModeLabel() {
  if (currentScoreMode === "custom") {
    return `自訂滿分（0 - ${getMaxScore()}）`;
  }

  return scoreModeConfig[currentScoreMode].label;
}

function getDefaultHelpText() {
  if (currentScoreMode === "grade") {
    return "可輸入：A+、A、A-、B+、B、B-、C+、C、C-、D+、D、D-、F";
  }

  return `可輸入範圍：${getMinScore()} - ${getMaxScore()}`;
}

function updateSettingNote() {
  if (currentScoreMode === "custom") {
    settingNote.textContent = `目前為自訂滿分模式，成績範圍 0 到 ${getMaxScore()}。系統會自動擋掉負分與超過滿分的數值。`;
    averageTitle.textContent = "自訂分數平均";
    averageHint.textContent = `依自訂滿分 ${getMaxScore()} 計算，並同步換算百分比。`;
  } else if (currentScoreMode === "grade") {
    settingNote.textContent = "目前為字母等第模式，可輸入 A+、A、A-、B+、B、B-、C+、C、C-、D+、D、D-、F，系統會自動換算成百分比。";
    averageTitle.textContent = scoreModeConfig.grade.averageTitle;
    averageHint.textContent = "依等第換算後的百分比計算。";
  } else {
    const config = scoreModeConfig[currentScoreMode];
    settingNote.textContent = `目前為${config.label}，成績範圍 ${config.min} 到 ${config.max}。`;
    averageTitle.textContent = config.averageTitle;
    averageHint.textContent = `依${config.label}計算，並同步換算百分比。`;
  }

  gpaHint.textContent = `依 GPA ${currentGpaSystem} 計算`;
}

function updateSchoolInfo() {
  const profile = systemProfiles[currentSystem];
  schoolTag.textContent = profile.tag;
  schoolTitle.textContent = profile.title;
  schoolDescription.textContent = profile.description;
  schoolMeta.textContent = profile.meta;
}

function renderInputs() {
  const isGradeMode = currentScoreMode === "grade";
  const min = getMinScore();
  const max = getMaxScore();
  const step = currentScoreMode === "level" ? 1 : 0.1;
  const placeholder = currentScoreMode === "custom"
    ? `請輸入 0 - ${max}`
    : scoreModeConfig[currentScoreMode].placeholder;

  subjectInputs.innerHTML = subjectSets[currentSystem]
    .map((subject) => `
      <div class="input-card">
        <label for="${subject.key}">${subject.label}</label>
        <input
          id="${subject.key}"
          name="${subject.key}"
          class="score-input"
          data-subject="${subject.label}"
          type="${isGradeMode ? "text" : "number"}"
          inputmode="${isGradeMode ? "text" : "decimal"}"
          ${isGradeMode ? "" : `min="${min}" max="${max}" step="${step}"`}
          placeholder="${placeholder}"
          autocomplete="off"
          autocapitalize="characters"
        >
        <small class="input-help" id="${subject.key}-help">${getDefaultHelpText()}</small>
      </div>
    `)
    .join("");
}

function normalizeGradeValue(rawValue) {
  return rawValue.trim().toUpperCase().replace(/\s+/g, "");
}

function normalizeScore(rawScore) {
  const max = getMaxScore();
  if (!Number.isFinite(rawScore) || max <= 0) return Number.NaN;
  return (rawScore / max) * 100;
}

function scoreToGpa(normalizedScore) {
  if (currentGpaSystem === "4.0") {
    if (normalizedScore >= 93) return 4.0;
    if (normalizedScore >= 90) return 3.7;
    if (normalizedScore >= 87) return 3.3;
    if (normalizedScore >= 83) return 3.0;
    if (normalizedScore >= 80) return 2.7;
    if (normalizedScore >= 77) return 2.3;
    if (normalizedScore >= 73) return 2.0;
    if (normalizedScore >= 70) return 1.7;
    if (normalizedScore >= 67) return 1.3;
    if (normalizedScore >= 65) return 1.0;
    return 0;
  }

  if (normalizedScore >= 90) return 4.3;
  if (normalizedScore >= 85) return 4.0;
  if (normalizedScore >= 80) return 3.7;
  if (normalizedScore >= 77) return 3.3;
  if (normalizedScore >= 73) return 3.0;
  if (normalizedScore >= 70) return 2.7;
  if (normalizedScore >= 67) return 2.3;
  if (normalizedScore >= 63) return 2.0;
  if (normalizedScore >= 60) return 1.7;
  return 0;
}

function getBand(normalizedAverage) {
  if (normalizedAverage >= 85) {
    return {
      label: "前段",
      hint: "整體表現穩定，建議維持優勢科目並補強細節。"
    };
  }

  if (normalizedAverage >= 70) {
    return {
      label: "中段",
      hint: "基礎尚可，建議優先拉高偏弱科目，整體平均會進步最快。"
    };
  }

  return {
    label: "後段",
    hint: "建議先建立固定讀書節奏，優先補強弱科與核心觀念。"
  };
}

function getSubjectLevel(normalizedScore) {
  if (normalizedScore >= 85) return "strong";
  if (normalizedScore >= 70) return "medium";
  return "low";
}

function getSubjectStatusText(level) {
  if (level === "strong") return "表現穩定";
  if (level === "medium") return "仍可提升";
  return "優先補強";
}

function setInputError(input, message = "") {
  const help = document.getElementById(`${input.id}-help`);
  if (!help) return;

  if (message) {
    help.textContent = message;
    help.classList.add("is-error");
  } else {
    help.textContent = getDefaultHelpText();
    help.classList.remove("is-error");
  }
}

function validateAndNormalizeInput(input) {
  if (input.value === "") {
    setInputError(input);
    return null;
  }

  if (currentScoreMode === "grade") {
    const normalizedGrade = normalizeGradeValue(input.value);
    if (!(normalizedGrade in gradeScale)) {
      setInputError(input, "請輸入有效等第，例如 A、B+、C-。");
      return null;
    }

    input.value = normalizedGrade;
    setInputError(input);
    return {
      rawValue: normalizedGrade,
      rawScore: gradeScale[normalizedGrade],
      normalizedScore: gradeScale[normalizedGrade]
    };
  }

  const max = getMaxScore();
  const min = getMinScore();
  let value = Number.parseFloat(input.value);

  if (!Number.isFinite(value)) {
    input.value = "";
    setInputError(input, "請輸入有效數字。");
    return null;
  }

  if (value < min) {
    value = min;
    input.value = String(value);
    setInputError(input, "不能輸入負分，已自動改為 0。");
    return null;
  }

  if (value > max) {
    value = max;
    input.value = String(value);
    setInputError(input, `不能超過滿分 ${max}，已自動調整。`);
    return null;
  }

  if (currentScoreMode === "level") {
    value = Math.round(value);
    input.value = String(value);
  }

  setInputError(input);
  return {
    rawValue: input.value,
    rawScore: value,
    normalizedScore: normalizeScore(value)
  };
}

function collectScores() {
  const scores = [];
  const inputs = [...document.querySelectorAll(".score-input")];

  for (const input of inputs) {
    if (input.value === "") continue;

    const parsed = validateAndNormalizeInput(input);
    if (!parsed || !Number.isFinite(parsed.normalizedScore)) continue;

    const subject = subjectSets[currentSystem].find((item) => item.key === input.name);
    if (!subject) continue;

    scores.push({
      ...subject,
      rawValue: parsed.rawValue,
      rawScore: parsed.rawScore,
      normalizedScore: parsed.normalizedScore
    });
  }

  return scores;
}

function buildOverallAdvice(scores, averageRaw, averageNormalized, band) {
  const weakSubjects = scores.filter((item) => item.normalizedScore < 70).map((item) => item.label);
  const strongSubjects = scores.filter((item) => item.normalizedScore >= 85).map((item) => item.label);
  const systemFocus = systemProfiles[currentSystem].meta;
  let modeText = `${averageTitle.textContent} ${averageRaw.toFixed(1)}`;

  if (currentScoreMode === "custom") {
    modeText = `自訂平均 ${averageRaw.toFixed(1)} / ${getMaxScore()}`;
  }

  if (currentScoreMode === "grade") {
    modeText = `等第換算平均 ${averageNormalized.toFixed(1)}%`;
  }

  const advice = [];
  advice.push(`目前 ${modeText}，屬於${band.label}區間。`);

  if (weakSubjects.length) {
    advice.push(`建議先把 ${weakSubjects.join("、")} 列為優先補救科目，每週固定安排基礎複習與錯題整理。`);
  } else {
    advice.push("目前沒有明顯弱科，可以把時間放在維持穩定與提升解題效率。");
  }

  if (strongSubjects.length) {
    advice.push(`${strongSubjects.join("、")} 是目前相對有優勢的科目，適合維持手感並作為拉高總平均的主力。`);
  }

  advice.push(systemFocus);

  if (averageNormalized >= 85) {
    advice.push("接下來應把重點放在減少粗心、強化整合題與複合題表現。");
  } else if (averageNormalized >= 70) {
    advice.push("分數要再往上，關鍵是把中低分科目穩定拉升。");
  } else {
    advice.push("現階段先建立每天固定讀書時段，先把基本觀念讀懂，比大量刷題更重要。");
  }

  return advice.join("");
}

function formatRawDisplay(item) {
  if (currentScoreMode === "grade") {
    return `原始輸入：${item.rawValue}`;
  }

  if (currentScoreMode === "level") {
    return `原始分數：${item.rawScore.toFixed(0)} / 15`;
  }

  return `原始分數：${item.rawScore.toFixed(1)} / ${getMaxScore()}`;
}

function createAnalysisCards(scores) {
  analysisList.innerHTML = scores
    .map((item) => {
      const level = getSubjectLevel(item.normalizedScore);
      const badgeClass = level === "strong" ? "badge" : level === "medium" ? "badge medium" : "badge low";
      const adviceText = subjectAdvice[item.key]?.[level] || "建議持續整理錯題並安排規律複習。";

      return `
        <article class="analysis-item">
          <div class="analysis-item__top">
            <h4>${item.label}</h4>
            <span class="${badgeClass}">${getSubjectStatusText(level)}</span>
          </div>
          <p>${formatRawDisplay(item)}</p>
          <p>換算百分比：${item.normalizedScore.toFixed(1)}%</p>
          <small>加強建議</small>
          <p>${adviceText}</p>
        </article>
      `;
    })
    .join("");
}

function resetOutput() {
  averageValue.textContent = "--";
  gpaValue.textContent = "--";
  bandValue.textContent = "--";
  bandHint.textContent = "待分析";
  overallAdvice.textContent = "請先輸入成績並點擊「開始分析」。";
  analysisList.innerHTML = '<div class="empty-state">尚未產生分析結果。</div>';
  formMessage.textContent = "請輸入至少一科成績。";
  formMessage.classList.remove("is-error");
}

function analyzeScores(event) {
  event?.preventDefault();

  const scores = collectScores();
  if (!scores.length) {
    resetOutput();
    formMessage.textContent = "請先輸入至少一科有效成績。";
    formMessage.classList.add("is-error");
    return;
  }

  const averageRaw = scores.reduce((sum, item) => sum + item.rawScore, 0) / scores.length;
  const averageNormalized = scores.reduce((sum, item) => sum + item.normalizedScore, 0) / scores.length;
  const totalGpa = scores.reduce((sum, item) => sum + scoreToGpa(item.normalizedScore), 0) / scores.length;
  const band = getBand(averageNormalized);

  averageValue.textContent = currentScoreMode === "level" ? averageRaw.toFixed(0) : averageRaw.toFixed(1);
  if (currentScoreMode === "grade") {
    averageValue.textContent = `${averageNormalized.toFixed(1)}%`;
  }

  gpaValue.textContent = totalGpa.toFixed(2);
  bandValue.textContent = band.label;
  bandHint.textContent = `${band.hint} 百分比平均 ${averageNormalized.toFixed(1)}%。`;
  overallAdvice.textContent = buildOverallAdvice(scores, averageRaw, averageNormalized, band);
  createAnalysisCards(scores);
  formMessage.textContent = `已分析 ${scores.length} 科，目前使用 ${getModeLabel()}。`;
  formMessage.classList.remove("is-error");
}

function setSystem(system) {
  currentSystem = system;
  [...systemSwitch.querySelectorAll(".system-switch__btn")].forEach((button) => {
    button.classList.toggle("is-active", button.dataset.system === system);
  });
  updateSchoolInfo();
  renderInputs();
  updateSettingNote();
  resetOutput();
}

function handleScoreModeChange() {
  currentScoreMode = scoreModeSelect.value;
  customMaxField.hidden = currentScoreMode !== "custom";
  renderInputs();
  updateSettingNote();
  resetOutput();
}

function handleCustomMaxChange() {
  let value = Number.parseFloat(customMaxScoreInput.value);
  if (!Number.isFinite(value) || value <= 0) {
    value = 100;
  }
  customMaxScoreInput.value = String(value);
  renderInputs();
  updateSettingNote();
  resetOutput();
}

function fillDemoScores() {
  const max = getMaxScore();
  const modeDemo = demoScores[currentScoreMode][currentSystem];

  subjectSets[currentSystem].forEach((subject) => {
    const input = document.getElementById(subject.key);
    if (!input) return;

    let value = modeDemo?.[subject.key];
    if (currentScoreMode === "custom" && max !== 100) {
      const percentBased = demoScores.percent[currentSystem][subject.key];
      value = (percentBased / 100) * max;
    }

    input.value = value ?? "";
    validateAndNormalizeInput(input);
  });

  analyzeScores();
}

function resetScores() {
  [...document.querySelectorAll(".score-input")].forEach((input) => {
    input.value = "";
    setInputError(input);
  });
  resetOutput();
}

systemSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-system]");
  if (!button) return;
  setSystem(button.dataset.system);
});

scoreModeSelect.addEventListener("change", handleScoreModeChange);
gpaSystemSelect.addEventListener("change", () => {
  currentGpaSystem = gpaSystemSelect.value;
  updateSettingNote();
  if (averageValue.textContent !== "--") {
    analyzeScores();
  }
});
customMaxScoreInput.addEventListener("input", handleCustomMaxChange);

scoreForm.addEventListener("submit", analyzeScores);
subjectInputs.addEventListener("input", (event) => {
  const input = event.target.closest(".score-input");
  if (!input) return;
  validateAndNormalizeInput(input);
});
fillDemoBtn.addEventListener("click", fillDemoScores);
resetScoresBtn.addEventListener("click", resetScores);

renderInputs();
updateSchoolInfo();
updateSettingNote();
resetOutput();
