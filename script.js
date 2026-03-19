const virtues = [
  "节制",
  "缄默",
  "秩序",
  "决心",
  "节俭",
  "勤勉",
  "真诚",
  "正义",
  "中庸",
  "清洁",
  "宁静",
  "贞洁",
  "谦逊",
];

const franklinFacts = [
  { text: "他于 1706 年出生在波士顿。" },
  { text: "他于 1790 年在费城去世。" },
  { text: "他来自一个有 17 个孩子的大家庭。" },
  { text: "他小时候在父亲的肥皂和蜡烛作坊附近长大。" },
  { text: "他大约 10 岁后就离开学校，主要靠自学成长。" },
  { text: "他 12 岁开始做印刷学徒。" },
  { text: "他年轻时靠大量阅读练成写作能力。" },
  { text: "他 16 岁时曾用 “Silence Dogood” 的笔名写文章。" },
  { text: "他年轻时离开波士顿，去了费城发展。" },
  { text: "他曾在伦敦做过印刷工。" },
  { text: "他在 1729 年买下《宾夕法尼亚公报》。" },
  { text: "他创办的《穷理查年鉴》从 1732 年出版多年。" },
  { text: "他留下了许多关于勤勉、节俭和自律的格言。" },
  { text: "他在 1727 年创建了 Junto 讨论社团。" },
  { text: "他常把读书、讨论和公共行动结合起来。" },
  { text: "他在 1731 年帮助建立了费城图书馆公司。" },
  { text: "他帮助推动了美国早期公共图书馆文化。" },
  { text: "他帮助建立了费城的志愿消防组织。" },
  { text: "他也推动过早期火灾保险制度的发展。" },
  { text: "他在 1737 年被任命为费城邮政局长。" },
  { text: "他在 1753 年成为北美联合副邮政总长。" },
  { text: "他在 1775 年成为联合殖民地第一任邮政总长。" },
  { text: "他非常重视邮路效率和公共通信网络。" },
  { text: "他参与创建的教育机构后来发展成宾夕法尼亚大学。" },
  { text: "他也参与推动了费城医院的建立。" },
  { text: "他在 1743 年提出建立美国哲学学会。" },
  { text: "他在 1748 年基本退出印刷业，把重心转向科学和公共事务。" },
  { text: "他的电学研究后来出版成书并广泛传播。" },
  { text: "他最有名的科学形象之一，是风筝实验。" },
  { text: "他的风筝实验通常被追溯到 1752 年。" },
  { text: "他的风筝实验帮助证明闪电与电现象有关。" },
  { text: "他的风筝实验并不是“被雷直接劈中”的故事版本。" },
  { text: "他发明了避雷针。" },
  { text: "他的避雷针帮助建筑物减少雷击风险。" },
  { text: "他发明了双焦眼镜。" },
  { text: "他设计双焦眼镜，是为了看远看近都更方便。" },
  { text: "他发明了富兰克林炉。" },
  { text: "他设计的炉子比普通壁炉更节能。" },
  { text: "他还发明了玻璃琴（glass armonica）。" },
  { text: "他设计的玻璃琴在 18 世纪很受欢迎。" },
  { text: "他还为家人设计过柔性导尿管。" },
  { text: "他少年时做过类似游泳手蹼的小发明。" },
  { text: "他本人非常喜欢游泳。" },
  { text: "他没有为很多发明申请专利。" },
  { text: "他认为有用的发明应该让更多人受益。" },
  { text: "他推广了不少今天仍常见的电学术语。" },
  { text: "他帮助普及了“正电”和“负电”的表达方式。" },
  { text: "他在电学上的成就为后来的研究打下基础。" },
  { text: "他在 1753 年获得英国皇家学会科普利奖章。" },
  { text: "他也研究过海流，常被联系到“湾流”研究。" },
  { text: "他在 1754 年参加了 Albany Congress。" },
  { text: "他曾提出殖民地联合的设想。" },
  { text: "他画过著名的 “Join, or Die” 政治图像。" },
  { text: "他的 “Join, or Die” 常被视为美国早期重要政治漫画。" },
  { text: "他曾长期在伦敦担任殖民地代理人。" },
  { text: "他并不是一开始就主张北美独立。" },
  { text: "他后来反对《印花税法》。" },
  { text: "他在 1775 年当选第二届大陆会议代表。" },
  { text: "他在 1776 年进入《独立宣言》起草委员会。" },
  { text: "他是《独立宣言》的签署者之一。" },
  { text: "他在 1776 年底前往法国争取支持。" },
  { text: "他在法国非常受欢迎，成为美国革命的代表人物。" },
  { text: "他帮助美国争取到法国的贷款和军事支持。" },
  { text: "他在 1778 年签署了与法国的条约。" },
  { text: "他后来成为美国驻法全权代表。" },
  { text: "他参与了对英和约谈判。" },
  { text: "他在 1783 年签署了《巴黎和约》。" },
  { text: "他在 1787 年参加了美国制宪会议。" },
  { text: "他是美国宪法签署者之一。" },
  { text: "他在 1790 年签署了反奴隶制请愿书。" },
  {
    text: "名言：诚实是最好的策略。",
    english: "Honesty is the best policy.",
  },
  {
    text: "名言：说得好，不如做得好。",
    english: "Well done is better than well said.",
  },
  {
    text: "名言：你若爱惜生命，就别浪费时间。",
    english: "Dost thou love life? Then do not squander Time; for that's the Stuff Life is made of.",
  },
  {
    text: "名言：失去的时间，再也找不回来。",
    english: "Lost Time is never found again.",
  },
  {
    text: "名言：无痛苦，便无收获。",
    english: "No gains without pains.",
  },
  {
    text: "名言：先看前方，不然你会发现自己落在后面。",
    english: "Look before, or you'll find yourself behind.",
  },
  {
    text: "名言：不要拿石头砸邻居，若你自家的窗户也是玻璃做的。",
    english: "Don't throw stones at your neighbors, if your own windows are glass.",
  },
  {
    text: "名言：真正的朋友，是最好的财富。",
    english: "A true Friend is the best Possession.",
  },
  {
    text: "名言：把时间藏起来没有意义，天赋也是如此。",
    english: "Hide not your Talents, they for Use were made. What's a Sun-Dial in the shade!",
  },
  {
    text: "名言：与人为善，其实也是对自己最好。",
    english: "When you're good to others, you're best to yourself.",
  },
];

const basePools = {
  easy: [
    { id: "easy-1", virtue: "节制", label: "节制：每餐七分饱" },
    { id: "easy-2", virtue: "缄默", label: "缄默：今天少说一句抱怨" },
    { id: "easy-3", virtue: "秩序", label: "秩序：整理书桌 10 分钟" },
    { id: "easy-4", virtue: "决心", label: "决心：完成一件拖延的小事" },
    { id: "easy-5", virtue: "节俭", label: "节俭：今天不冲动消费" },
    { id: "easy-6", virtue: "勤勉", label: "勤勉：专注工作 25 分钟" },
    { id: "easy-7", virtue: "真诚", label: "真诚：真心感谢一个人" },
    { id: "easy-8", virtue: "正义", label: "正义：主动帮别人一个小忙" },
    { id: "easy-9", virtue: "中庸", label: "中庸：遇事先深呼吸 3 次" },
    { id: "easy-10", virtue: "清洁", label: "清洁：收拾房间一个角落" },
    { id: "easy-11", virtue: "宁静", label: "宁静：静坐 5 分钟" },
    { id: "easy-12", virtue: "贞洁", label: "贞洁：减少无意义刷屏 20 分钟" },
    { id: "easy-13", virtue: "谦逊", label: "谦逊：先听别人说完" },
    { id: "easy-14", virtue: "节制", label: "节制：今天少喝一杯含糖饮料" },
    { id: "easy-15", virtue: "缄默", label: "缄默：回复消息前先想 3 秒" },
    { id: "easy-16", virtue: "秩序", label: "秩序：列出今日 3 件要事" },
    { id: "easy-17", virtue: "决心", label: "决心：开始最难的一项任务" },
    { id: "easy-18", virtue: "节俭", label: "节俭：自带水杯或餐具" },
    { id: "easy-19", virtue: "勤勉", label: "勤勉：读书 15 分钟" },
    { id: "easy-20", virtue: "真诚", label: "真诚：说一句真实而善意的话" },
    { id: "easy-21", virtue: "正义", label: "正义：排队时保持秩序" },
    { id: "easy-22", virtue: "中庸", label: "中庸：不因小事急躁" },
    { id: "easy-23", virtue: "清洁", label: "清洁：洗好今天用过的杯子" },
    { id: "easy-24", virtue: "宁静", label: "宁静：睡前不看手机 15 分钟" },
    { id: "easy-25", virtue: "谦逊", label: "谦逊：承认一个可以改进的地方" },
  ],
  hard: [
    { id: "hard-1", virtue: "节制", label: "节制：全天不吃夜宵" },
    { id: "hard-2", virtue: "缄默", label: "缄默：半天不说他人是非" },
    { id: "hard-3", virtue: "秩序", label: "秩序：把本周待办全部归类" },
    { id: "hard-4", virtue: "决心", label: "决心：处理一件拖延超过 7 天的事" },
    { id: "hard-5", virtue: "节俭", label: "节俭：今天记下所有支出" },
    { id: "hard-6", virtue: "勤勉", label: "勤勉：连续专注 2 个番茄钟" },
    { id: "hard-7", virtue: "真诚", label: "真诚：和一个人进行一次真诚沟通" },
    { id: "hard-8", virtue: "正义", label: "正义：为团队主动补一个位" },
    { id: "hard-9", virtue: "中庸", label: "中庸：冲突时先暂停 10 分钟再回应" },
    { id: "hard-10", virtue: "清洁", label: "清洁：完整整理一个抽屉或柜子" },
    { id: "hard-11", virtue: "宁静", label: "宁静：冥想或安静散步 15 分钟" },
    { id: "hard-12", virtue: "贞洁", label: "贞洁：晚上 9 点后不刷短视频" },
    { id: "hard-13", virtue: "谦逊", label: "谦逊：主动向别人请教一个问题" },
    { id: "hard-14", virtue: "节制", label: "节制：今天不喝奶茶或酒精" },
    { id: "hard-15", virtue: "缄默", label: "缄默：一天里不打断别人说话" },
    { id: "hard-16", virtue: "秩序", label: "秩序：清空邮箱或聊天待回复列表" },
    { id: "hard-17", virtue: "决心", label: "决心：完成一个你一直在逃避的电话" },
    { id: "hard-18", virtue: "节俭", label: "节俭：做一顿家常饭代替外卖" },
    { id: "hard-19", virtue: "勤勉", label: "勤勉：完成一项需要 60 分钟的深度任务" },
    { id: "hard-20", virtue: "真诚", label: "真诚：写下今天最真实的感受" },
    { id: "hard-21", virtue: "正义", label: "正义：把答应别人的事今天兑现" },
    { id: "hard-22", virtue: "中庸", label: "中庸：遇到不顺时不立刻情绪化回应" },
    { id: "hard-23", virtue: "清洁", label: "清洁：换洗床单或清理地面" },
    { id: "hard-24", virtue: "宁静", label: "宁静：睡前做 10 分钟拉伸放松" },
    { id: "hard-25", virtue: "谦逊", label: "谦逊：把一次功劳归给协助你的人" },
  ],
};

const storageKeys = {
  pools: "franklin-bingo-managed-pools",
};

const gridOptions = [3, 4, 5];
const modeNames = {
  easy: "简单任务",
  hard: "困难任务",
};

const state = {
  mode: "easy",
  size: 4,
  tasks: [],
  completed: new Set(),
  pools: loadManagedPools(),
  fireworksRunning: false,
};

const boardEl = document.getElementById("board");
const sizeOptionsEl = document.getElementById("sizeOptions");
const modeLabelEl = document.getElementById("modeLabel");
const progressPercentEl = document.getElementById("progressPercent");
const progressMetaEl = document.getElementById("progressMeta");
const progressBarEl = document.querySelector(".progress-ring .bar");
const taskManagerBtn = document.getElementById("taskManagerBtn");
const taskMenuEl = document.getElementById("taskMenu");
const shuffleBtn = document.getElementById("shuffleBtn");
const rerollBtn = document.getElementById("rerollBtn");
const customModalEl = document.getElementById("customModal");
const wizardStepsEl = document.getElementById("wizardSteps");
const difficultyChoicesEl = document.getElementById("difficultyChoices");
const virtueChoicesEl = document.getElementById("virtueChoices");
const actionChoicesEl = document.getElementById("actionChoices");
const targetTaskField = document.getElementById("targetTaskField");
const targetTaskLabel = document.getElementById("targetTaskLabel");
const targetTaskSelect = document.getElementById("targetTaskSelect");
const customTaskInputField = document.getElementById("customTaskInputField");
const customTaskInput = document.getElementById("customTaskInput");
const backStepBtn = document.getElementById("backStepBtn");
const saveCustomBtn = document.getElementById("saveCustomBtn");
const addAnotherBtn = document.getElementById("addAnotherBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
const bingoOverlayEl = document.getElementById("bingoOverlay");
const factTextEl = document.getElementById("factText");
const factEnglishEl = document.getElementById("factEnglish");

const wizardState = {
  step: 1,
  mode: "easy",
  virtue: virtues[0],
  action: "add",
};

let lastFactIndex = -1;

function clonePool(mode) {
  return basePools[mode].map((task) => ({ ...task }));
}

function loadManagedPools() {
  try {
    const raw = localStorage.getItem(storageKeys.pools);
    if (!raw) {
      return {
        easy: clonePool("easy"),
        hard: clonePool("hard"),
      };
    }

    const parsed = JSON.parse(raw);
    return {
      easy: Array.isArray(parsed.easy) && parsed.easy.length > 0 ? parsed.easy : clonePool("easy"),
      hard: Array.isArray(parsed.hard) && parsed.hard.length > 0 ? parsed.hard : clonePool("hard"),
    };
  } catch {
    return {
      easy: clonePool("easy"),
      hard: clonePool("hard"),
    };
  }
}

function saveManagedPools() {
  localStorage.setItem(storageKeys.pools, JSON.stringify(state.pools));
}

function getTaskPool(mode) {
  return state.pools[mode].map((task) => ({ ...task }));
}

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomTasks(mode, size) {
  const count = size * size;
  const source = getTaskPool(mode);

  if (source.length === 0) {
    return Array.from({ length: count }, (_, index) => ({
      id: `fallback-${mode}-${index + 1}`,
      virtue: "自定义",
      label: `自定义任务 ${index + 1}`,
    }));
  }

  let expanded = [];
  while (expanded.length < count) {
    expanded = expanded.concat(shuffleArray(source));
  }
  return shuffleArray(expanded).slice(0, count);
}

function renderSizeOptions() {
  sizeOptionsEl.innerHTML = "";
  gridOptions.forEach((size) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `size-btn${state.size === size ? " active" : ""}`;
    btn.textContent = `${size} x ${size}`;
    btn.addEventListener("click", () => {
      if (state.size === size) return;
      state.size = size;
      rerollTasks();
      renderSizeOptions();
    });
    sizeOptionsEl.appendChild(btn);
  });
}

function rerollTasks() {
  state.tasks = getRandomTasks(state.mode, state.size);
  state.completed = new Set();
  renderBoard();
}

function shuffleCurrentTasks() {
  state.tasks = shuffleArray(state.tasks);
  state.completed = new Set();
  renderBoard();
}

function renderBoard() {
  boardEl.style.gridTemplateColumns = `repeat(${state.size}, minmax(0, 1fr))`;
  boardEl.innerHTML = "";

  state.tasks.forEach((task) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `tile${state.completed.has(task.id) ? " completed" : ""}`;
    tile.setAttribute("aria-pressed", String(state.completed.has(task.id)));

    const label = document.createElement("span");
    label.className = "tile-label";
    label.textContent = task.label;
    tile.appendChild(label);

    tile.addEventListener("click", () => toggleTile(task.id));
    boardEl.appendChild(tile);
  });

  modeLabelEl.textContent = modeNames[state.mode];
  updateProgress();
}

function toggleTile(taskId) {
  if (state.completed.has(taskId)) {
    state.completed.delete(taskId);
  } else {
    state.completed.add(taskId);
  }

  renderBoard();

  if (hasBingo()) {
    launchFireworks();
  }
}

function updateProgress() {
  const target = state.size;
  const bestLine = getBestLineCount();
  const capped = Math.min(bestLine, target);
  const percent = target === 0 ? 0 : Math.round((capped / target) * 100);
  const circumference = 314.16;
  const offset = circumference * (1 - percent / 100);

  progressPercentEl.textContent = `${percent}%`;
  progressMetaEl.textContent = `${capped} / ${target}`;
  progressBarEl.style.strokeDashoffset = String(offset);
}

function getBestLineCount() {
  const size = state.size;
  let best = 0;

  for (let row = 0; row < size; row += 1) {
    let count = 0;
    for (let col = 0; col < size; col += 1) {
      const index = row * size + col;
      if (state.completed.has(state.tasks[index].id)) count += 1;
    }
    best = Math.max(best, count);
  }

  for (let col = 0; col < size; col += 1) {
    let count = 0;
    for (let row = 0; row < size; row += 1) {
      const index = row * size + col;
      if (state.completed.has(state.tasks[index].id)) count += 1;
    }
    best = Math.max(best, count);
  }

  let diagonalDownCount = 0;
  for (let i = 0; i < size; i += 1) {
    const index = i * size + i;
    if (state.completed.has(state.tasks[index].id)) diagonalDownCount += 1;
  }
  best = Math.max(best, diagonalDownCount);

  let diagonalUpCount = 0;
  for (let i = 0; i < size; i += 1) {
    const index = i * size + (size - 1 - i);
    if (state.completed.has(state.tasks[index].id)) diagonalUpCount += 1;
  }
  best = Math.max(best, diagonalUpCount);

  return best;
}

function hasBingo() {
  const size = state.size;
  const filled = new Set(
    state.tasks
      .map((task, index) => (state.completed.has(task.id) ? index : -1))
      .filter((index) => index >= 0),
  );

  for (let row = 0; row < size; row += 1) {
    let complete = true;
    for (let col = 0; col < size; col += 1) {
      if (!filled.has(row * size + col)) {
        complete = false;
        break;
      }
    }
    if (complete) return true;
  }

  for (let col = 0; col < size; col += 1) {
    let complete = true;
    for (let row = 0; row < size; row += 1) {
      if (!filled.has(row * size + col)) {
        complete = false;
        break;
      }
    }
    if (complete) return true;
  }

  let diagonalDown = true;
  for (let i = 0; i < size; i += 1) {
    if (!filled.has(i * size + i)) {
      diagonalDown = false;
      break;
    }
  }
  if (diagonalDown) return true;

  let diagonalUp = true;
  for (let i = 0; i < size; i += 1) {
    if (!filled.has(i * size + (size - 1 - i))) {
      diagonalUp = false;
      break;
    }
  }
  if (diagonalUp) return true;

  return false;
}

function setMode(mode) {
  state.mode = mode;
  rerollTasks();
}

function openTaskMenu() {
  taskMenuEl.classList.toggle("hidden");
}

function closeTaskMenu() {
  taskMenuEl.classList.add("hidden");
}

function renderDifficultyChoices() {
  difficultyChoicesEl.innerHTML = "";
  Object.entries(modeNames).forEach(([mode, label]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `choice-card${wizardState.mode === mode ? " active" : ""}`;
    btn.dataset.mode = mode;
    btn.innerHTML = `<strong>${label}</strong><span>把任务加入这个难度的任务池</span>`;
    difficultyChoicesEl.appendChild(btn);
  });
}

function renderVirtueChoices() {
  virtueChoicesEl.innerHTML = "";
  virtues.forEach((virtue) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `choice-card${wizardState.virtue === virtue ? " active" : ""}`;
    btn.dataset.virtue = virtue;
    btn.innerHTML = `<strong>${virtue}</strong><span>管理这个美德下面的任务</span>`;
    virtueChoicesEl.appendChild(btn);
  });
}

function getTasksByVirtue(mode, virtue) {
  return state.pools[mode].filter((task) => task.virtue === virtue);
}

function refreshTargetTaskOptions() {
  const tasks = getTasksByVirtue(wizardState.mode, wizardState.virtue);
  const needsTarget = wizardState.action === "replace" || wizardState.action === "delete";

  targetTaskField.classList.toggle("hidden", !needsTarget);
  customTaskInputField.classList.toggle("hidden", wizardState.action === "delete");
  addAnotherBtn.classList.toggle("hidden", wizardState.action === "delete");

  targetTaskLabel.textContent = wizardState.action === "delete" ? "删除哪一条" : "替换哪一条";
  targetTaskSelect.innerHTML = "";

  if (!needsTarget) return;

  tasks.forEach((task) => {
    const option = document.createElement("option");
    option.value = task.id;
    option.textContent = task.label;
    targetTaskSelect.appendChild(option);
  });

  if (tasks.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = wizardState.action === "delete" ? "这个美德下暂时没有可删除任务" : "这个美德下暂时没有可替换任务";
    targetTaskSelect.appendChild(option);
  }
}

function openCustomModal() {
  wizardState.step = 1;
  wizardState.mode = state.mode;
  wizardState.virtue = virtues[0];
  wizardState.action = "add";
  customTaskInput.value = "";
  renderDifficultyChoices();
  renderVirtueChoices();
  refreshWizardUI();
  customModalEl.classList.remove("hidden");
  closeTaskMenu();
}

function closeCustomModal() {
  customModalEl.classList.add("hidden");
}

function refreshWizardUI() {
  document.querySelectorAll(".wizard-panel").forEach((panel) => {
    const isActive = Number(panel.dataset.panel) === wizardState.step;
    panel.classList.toggle("hidden", !isActive);
  });

  wizardStepsEl.querySelectorAll(".wizard-step").forEach((stepEl) => {
    const isActive = Number(stepEl.dataset.step) === wizardState.step;
    stepEl.classList.toggle("active", isActive);
  });

  difficultyChoicesEl.querySelectorAll(".choice-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.mode === wizardState.mode);
  });

  virtueChoicesEl.querySelectorAll(".choice-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.virtue === wizardState.virtue);
  });

  actionChoicesEl.querySelectorAll(".choice-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.action === wizardState.action);
  });

  refreshTargetTaskOptions();
  backStepBtn.classList.toggle("hidden", wizardState.step === 1);
}

function moveToStep(step) {
  wizardState.step = Math.max(1, Math.min(4, step));
  refreshWizardUI();
}

function createManagedTask(mode, virtue, label) {
  return {
    id: `user-${mode}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    virtue,
    label: normalizeTaskLabel(virtue, label),
  };
}

function normalizeTaskLabel(virtue, label) {
  const trimmed = label.trim();
  if (!trimmed) return "";
  if (trimmed.includes("：")) return trimmed;
  if (trimmed.includes(":")) return `${virtue}：${trimmed.split(":").slice(1).join(":").trim() || trimmed}`;
  return `${virtue}：${trimmed}`;
}

function saveCustomTask(keepOpen) {
  const mode = wizardState.mode;
  const virtue = wizardState.virtue;
  const action = wizardState.action;
  const label = normalizeTaskLabel(virtue, customTaskInput.value);

  if (action !== "delete" && !label) {
    alert("请输入任务内容。");
    return false;
  }

  if (action === "replace" || action === "delete") {
    const targetId = targetTaskSelect.value;
    if (!targetId) {
      alert(action === "delete" ? "当前没有可删除的任务。" : "当前没有可替换的任务，请改用“新增任务”。");
      return false;
    }

    const targetIndex = state.pools[mode].findIndex((task) => task.id === targetId);
    if (targetIndex === -1) {
      alert(action === "delete" ? "没有找到要删除的任务，请重新选择。" : "没有找到要替换的任务，请重新选择。");
      return false;
    }

    if (action === "delete") {
      state.pools[mode].splice(targetIndex, 1);
    } else {
      state.pools[mode][targetIndex] = {
        ...state.pools[mode][targetIndex],
        virtue,
        label,
      };
    }
  } else {
    state.pools[mode].push(createManagedTask(mode, virtue, label));
  }

  saveManagedPools();
  refreshReplaceOptions();

  if (mode === state.mode) {
    rerollTasks();
  }

  if (keepOpen) {
    customTaskInput.value = "";
    wizardState.step = 1;
    wizardState.action = "add";
    refreshWizardUI();
    customTaskInput.focus();
  } else {
    closeCustomModal();
  }

  return true;
}

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function launchFireworks() {
  if (state.fireworksRunning) return;

  state.fireworksRunning = true;
  showBingoOverlay();
  resizeCanvas();

  const bursts = Array.from({ length: 7 }, () => {
    const x = Math.random() * window.innerWidth;
    const y = 80 + Math.random() * (window.innerHeight * 0.45);
    return createBurst(x, y);
  });

  let frame = 0;

  function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    frame += 1;

    bursts.forEach((particles) => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.02;
        particle.alpha -= 0.012;

        if (particle.alpha <= 0) return;

        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    });

    ctx.globalAlpha = 1;

    if (frame < 110) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      state.fireworksRunning = false;
    }
  }

  requestAnimationFrame(animate);
}

function createBurst(x, y) {
  const palette = ["#97ab83", "#f3c76b", "#ef8f6b", "#7aa6d6", "#f6f1e6"];
  return Array.from({ length: 24 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 3.5;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      radius: 1.8 + Math.random() * 2.2,
      color: palette[Math.floor(Math.random() * palette.length)],
    };
  });
}

function showBingoOverlay() {
  const fact = getRandomFranklinFact();
  factTextEl.textContent = fact.text;
  if (fact.english) {
    factEnglishEl.textContent = fact.english;
    factEnglishEl.classList.remove("hidden");
  } else {
    factEnglishEl.textContent = "";
    factEnglishEl.classList.add("hidden");
  }

  bingoOverlayEl.classList.remove("hidden");
  window.clearTimeout(showBingoOverlay.timeoutId);
  showBingoOverlay.timeoutId = window.setTimeout(() => {
    bingoOverlayEl.classList.add("hidden");
  }, 3800);
}

function getRandomFranklinFact() {
  if (franklinFacts.length === 1) return franklinFacts[0];

  let index = Math.floor(Math.random() * franklinFacts.length);
  while (index === lastFactIndex) {
    index = Math.floor(Math.random() * franklinFacts.length);
  }
  lastFactIndex = index;
  return franklinFacts[index];
}

taskManagerBtn.addEventListener("click", openTaskMenu);
shuffleBtn.addEventListener("click", () => {
  closeTaskMenu();
  shuffleCurrentTasks();
});
rerollBtn.addEventListener("click", () => {
  closeTaskMenu();
  rerollTasks();
});

taskMenuEl.addEventListener("click", (event) => {
  const target = event.target.closest("button[data-mode]");
  if (!target) return;
  const { mode } = target.dataset;

  if (mode === "customize") {
    openCustomModal();
    return;
  }

  setMode(mode);
  closeTaskMenu();
});

difficultyChoicesEl.addEventListener("click", (event) => {
  const card = event.target.closest(".choice-card[data-mode]");
  if (!card) return;
  wizardState.mode = card.dataset.mode;
  moveToStep(2);
});

virtueChoicesEl.addEventListener("click", (event) => {
  const card = event.target.closest(".choice-card[data-virtue]");
  if (!card) return;
  wizardState.virtue = card.dataset.virtue;
  moveToStep(3);
});

actionChoicesEl.addEventListener("click", (event) => {
  const card = event.target.closest(".choice-card[data-action]");
  if (!card) return;
  wizardState.action = card.dataset.action;
  moveToStep(4);
});

backStepBtn.addEventListener("click", () => {
  moveToStep(wizardState.step - 1);
});

saveCustomBtn.addEventListener("click", () => {
  saveCustomTask(false);
});

addAnotherBtn.addEventListener("click", () => {
  saveCustomTask(true);
});

closeModalBtn.addEventListener("click", closeCustomModal);
customModalEl.addEventListener("click", (event) => {
  if (event.target === customModalEl) closeCustomModal();
});

document.addEventListener("click", (event) => {
  if (!taskManagerBtn.contains(event.target) && !taskMenuEl.contains(event.target)) {
    closeTaskMenu();
  }
});

window.addEventListener("resize", resizeCanvas);

renderDifficultyChoices();
renderVirtueChoices();
renderSizeOptions();
rerollTasks();
