const tarotDeck = [
  {
    id: 0,
    name: "愚者",
    keywords: ["始まり", "自由", "可能性"],
    image: "images/tarot_00.png.webp",
  },
  {
    id: 1,
    name: "魔術師",
    keywords: ["意志", "創造", "実行"],
    image: "images/tarot_01.png.webp",
  },
  {
    id: 2,
    name: "女教皇",
    keywords: ["直感", "静けさ", "知恵"],
    image: "images/tarot_02.png.webp",
  },
  {
    id: 3,
    name: "女帝",
    keywords: ["豊かさ", "育成", "感性"],
    image: "images/tarot_03.png.webp",
  },
  {
    id: 4,
    name: "皇帝",
    keywords: ["安定", "責任", "構造"],
    image: "images/tarot_04.png.webp",
  },
  {
    id: 5,
    name: "教皇",
    keywords: ["信頼", "伝統", "導き"],
    image: "images/tarot_05.png.webp",
  },
  {
    id: 6,
    name: "恋人",
    keywords: ["選択", "調和", "絆"],
    image: "images/tarot_06.png.webp",
  },
  {
    id: 7,
    name: "戦車",
    keywords: ["前進", "勝利", "集中"],
    image: "images/tarot_07.png.webp",
  },
  {
    id: 8,
    name: "力",
    keywords: ["勇気", "忍耐", "優しさ"],
    image: "images/tarot_08.png.webp",
  },
  {
    id: 9,
    name: "隠者",
    keywords: ["探求", "内省", "洞察"],
    image: "images/tarot_09.png.webp",
  },
  {
    id: 10,
    name: "運命の輪",
    keywords: ["転機", "流れ", "好機"],
    image: "images/tarot_10.png.webp",
  },
  {
    id: 11,
    name: "正義",
    keywords: ["均衡", "判断", "誠実"],
    image: "images/tarot_11.png.webp",
  },
  {
    id: 12,
    name: "吊るされた男",
    keywords: ["視点", "受容", "待機"],
    image: "images/tarot_12.png.webp",
  },
  {
    id: 13,
    name: "死神",
    keywords: ["終わり", "変容", "再生"],
    image: "images/tarot_13.png.webp",
  },
  {
    id: 14,
    name: "節制",
    keywords: ["調整", "癒し", "統合"],
    image: "images/tarot_14.png.webp",
  },
  {
    id: 15,
    name: "悪魔",
    keywords: ["執着", "誘惑", "解放"],
    image: "images/tarot_15.png.webp",
  },
  {
    id: 16,
    name: "塔",
    keywords: ["衝撃", "浄化", "突破"],
    image: "images/tarot_16.png.webp",
  },
  {
    id: 17,
    name: "星",
    keywords: ["希望", "回復", "ひらめき"],
    image: "images/tarot_17.png.webp",
  },
  {
    id: 18,
    name: "月",
    keywords: ["不安", "夢", "揺らぎ"],
    image: "images/tarot_18.png.webp",
  },
  {
    id: 19,
    name: "太陽",
    keywords: ["喜び", "成功", "生命力"],
    image: "images/tarot_19.png.webp",
  },
  {
    id: 20,
    name: "審判",
    keywords: ["目覚め", "復活", "決断"],
    image: "images/tarot_20.png.webp",
  },
  {
    id: 21,
    name: "世界",
    keywords: ["完成", "達成", "循環"],
    image: "images/tarot_21.png.webp",
  },
];

const minorSuitDefinitions = [
  {
    id: "wand",
    name: "ワンド",
    keywords: ["情熱", "行動", "意志"],
  },
  {
    id: "cup",
    name: "カップ",
    keywords: ["感情", "愛情", "共感"],
  },
  {
    id: "sword",
    name: "ソード",
    keywords: ["思考", "判断", "言葉"],
  },
  {
    id: "pentacle",
    name: "ペンタクル",
    keywords: ["現実", "豊かさ", "実り"],
  },
];

const minorRankDefinitions = [
  { number: "01", name: "エース", keywords: ["始まり", "可能性"] },
  { number: "02", name: "2", keywords: ["選択", "均衡"] },
  { number: "03", name: "3", keywords: ["成長", "協力"] },
  { number: "04", name: "4", keywords: ["安定", "基盤"] },
  { number: "05", name: "5", keywords: ["変化", "課題"] },
  { number: "06", name: "6", keywords: ["調和", "回復"] },
  { number: "07", name: "7", keywords: ["挑戦", "見極め"] },
  { number: "08", name: "8", keywords: ["集中", "積み重ね"] },
  { number: "09", name: "9", keywords: ["達成", "熟成"] },
  { number: "10", name: "10", keywords: ["完成", "区切り"] },
  { number: "11", name: "ペイジ", keywords: ["学び", "知らせ"] },
  { number: "12", name: "ナイト", keywords: ["前進", "探求"] },
  { number: "13", name: "クイーン", keywords: ["受容", "育成"] },
  { number: "14", name: "キング", keywords: ["統率", "成熟"] },
];

const minorArcanaDeck = minorSuitDefinitions.flatMap((suit) =>
  minorRankDefinitions.map((rank) => ({
    id: `${suit.id}-${rank.number}`,
    name: `${suit.name} ${rank.name}`,
    keywords: [suit.keywords[0], ...rank.keywords],
    image: `images/tarot_${suit.id}_${rank.number}.png.webp`,
    arcana: "minor",
  })),
);

const spreadDefinitions = {
  single: {
    className: "layout-single",
    count: 1,
    positions: ["現在"],
  },
  three: {
    className: "layout-three",
    count: 3,
    positions: ["過去", "現在", "未来"],
  },
  cross: {
    className: "layout-cross",
    count: 5,
    positions: ["中心", "上", "右", "下", "左"],
    ids: ["center", "top", "right", "bottom", "left"],
  },
  free: {
    className: "layout-free",
    count: null,
    positions: [],
  },
};

const spreadBoard = document.querySelector("#spreadBoard");
const spreadSelect = document.querySelector("#spreadSelect");
const debugCardField = document.querySelector("#debugCardField");
const debugCardSelect = document.querySelector("#debugCardSelect");
const cardCount = document.querySelector("#cardCount");
const countValue = document.querySelector("#countValue");
const countField = document.querySelector("#countField");
const backgroundSelect = document.querySelector("#backgroundSelect");
const reversedToggle = document.querySelector("#reversedToggle");
const minorArcanaToggle = document.querySelector("#minorArcanaToggle");
const shuffleButton = document.querySelector("#shuffleButton");
const drawButton = document.querySelector("#drawButton");
const readingStamp = document.querySelector("#readingStamp");
const detailPanel = document.querySelector("#detailPanel");
const detailArt = document.querySelector("#detailArt");
const detailPosition = document.querySelector("#detailPosition");
const detailName = document.querySelector("#detailName");
const detailMeaning = document.querySelector("#detailMeaning");
const instagramButton = document.querySelector("#instagramButton");
const shareDialog = document.querySelector("#shareDialog");
const shareCanvas = document.querySelector("#shareCanvas");
const shareCloseButton = document.querySelector("#shareCloseButton");
const shareDownloadButton = document.querySelector("#shareDownloadButton");

let currentReading = [];
let selectedCardIndex = 0;

const debugParams = new URLSearchParams(window.location.search);
const isDebugMode = ["1", "true"].includes(debugParams.get("debug"));

const shareSize = {
  width: 1080,
  height: 1350,
};

const cardColorFilter = "sepia(0.16) saturate(0.88) contrast(0.96) brightness(1.02)";
const cardCropScale = 1.06;
const boardThemes = {
  offwhite: {
    texture: "images/texture.jpg",
    glow: ["rgba(198, 155, 60, 0.14)", "rgba(198, 155, 60, 0)"],
    shade: ["rgba(255, 252, 246, 0.9)", "rgba(247, 241, 230, 0.94)"],
    vignette: ["rgba(255, 252, 246, 0)", "rgba(255, 252, 246, 0.28)"],
  },
  navy: {
    texture: "images/texture.jpg",
    glow: ["rgba(47, 82, 130, 0.28)", "rgba(47, 82, 130, 0)"],
    shade: ["rgba(5, 19, 38, 0.5)", "rgba(3, 10, 24, 0.64)"],
    vignette: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.28)"],
  },
  brown: {
    texture: "images/texture_w.jpg",
  },
};

function shuffleDeck(deck) {
  const shuffled = [...deck];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function getSpread() {
  return spreadDefinitions[spreadSelect.value];
}

function getCount() {
  const spread = getSpread();
  return spread.count ?? Number(cardCount.value);
}

function getActiveDeck() {
  if (minorArcanaToggle.checked) {
    return [...tarotDeck, ...minorArcanaDeck];
  }

  return tarotDeck;
}

function getPositionName(spread, index) {
  return spread.positions[index] ?? `${index + 1}枚目`;
}

function getDebugCardLabel(card) {
  if (card.arcana === "minor") {
    return card.name;
  }

  return `${card.id.toString().padStart(2, "0")} ${card.name}`;
}

function populateDebugCardSelect() {
  if (!debugCardSelect) {
    return;
  }

  debugCardSelect.innerHTML = "";
  debugCardSelect.append(new Option("ランダム", ""));

  getActiveDeck().forEach((card) => {
    debugCardSelect.append(new Option(getDebugCardLabel(card), card.id.toString()));
  });
}

function updateDebugControl() {
  if (!debugCardField || !debugCardSelect) {
    return;
  }

  const isVisible = isDebugMode && spreadSelect.value === "single";
  debugCardField.hidden = !isVisible;
  debugCardSelect.disabled = !isVisible;
}

function getDebugCard() {
  if (!isDebugMode || spreadSelect.value !== "single" || !debugCardSelect?.value) {
    return null;
  }

  return getActiveDeck().find((card) => card.id.toString() === debugCardSelect.value) ?? null;
}

function updateCountControl() {
  const isFree = spreadSelect.value === "free";
  countField.hidden = !isFree;
  countValue.textContent = cardCount.value;
}

function getBoardTheme() {
  return boardThemes[backgroundSelect.value] ?? boardThemes.offwhite;
}

function applyBoardTheme() {
  document.body.dataset.boardTheme = backgroundSelect.value;
}

function formatStamp() {
  const now = new Date();
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);
}

function loadCanvasImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`${src} を読み込めませんでした。`));
    image.src = src;
  });
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const corner = Math.min(radius, width / 2, height / 2);

  ctx.beginPath();
  ctx.moveTo(x + corner, y);
  ctx.lineTo(x + width - corner, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + corner);
  ctx.lineTo(x + width, y + height - corner);
  ctx.quadraticCurveTo(x + width, y + height, x + width - corner, y + height);
  ctx.lineTo(x + corner, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - corner);
  ctx.lineTo(x, y + corner);
  ctx.quadraticCurveTo(x, y, x + corner, y);
  ctx.closePath();
}

function drawImageCover(ctx, image, x, y, width, height, cropScale = 1) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight) * cropScale;
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.naturalWidth - sourceWidth) / 2;
  const sourceY = (image.naturalHeight - sourceHeight) / 2;

  ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

function drawVelvetBackground(ctx, width, height) {
  const baseGradient = ctx.createLinearGradient(0, 0, width, height);
  baseGradient.addColorStop(0, "#08172b");
  baseGradient.addColorStop(0.42, "#102642");
  baseGradient.addColorStop(1, "#040a16");
  ctx.fillStyle = baseGradient;
  ctx.fillRect(0, 0, width, height);

  for (let index = 0; index < 900; index += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const length = 90 + Math.random() * 240;
    const alpha = 0.018 + Math.random() * 0.034;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
      x + length * 0.22,
      y - 18,
      x + length * 0.72,
      y + 28,
      x + length,
      y + Math.random() * 24 - 12,
    );
    ctx.strokeStyle = `rgba(219, 231, 245, ${alpha})`;
    ctx.lineWidth = 1 + Math.random() * 2.2;
    ctx.stroke();
  }

  for (let index = 0; index < 140; index += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = 80 + Math.random() * 220;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, "rgba(66, 93, 133, 0.12)");
    glow.addColorStop(1, "rgba(66, 93, 133, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }

  const vignette = ctx.createRadialGradient(
    width / 2,
    height / 2,
    height * 0.16,
    width / 2,
    height / 2,
    height * 0.72,
  );
  vignette.addColorStop(0, "rgba(6, 14, 28, 0)");
  vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, width, height);
}

function drawTextureBackground(ctx, image, width, height, theme) {
  drawImageCover(ctx, image, 0, 0, width, height);

  if (theme.glow) {
    const glow = ctx.createRadialGradient(width * 0.24, height * 0.18, 0, width * 0.24, height * 0.18, 540);
    glow.addColorStop(0, theme.glow[0]);
    glow.addColorStop(1, theme.glow[1]);
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  }

  if (theme.shade) {
    const shade = ctx.createLinearGradient(0, 0, width, height);
    shade.addColorStop(0, theme.shade[0]);
    shade.addColorStop(1, theme.shade[1]);
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, width, height);
  }

  if (theme.vignette) {
    const vignette = ctx.createRadialGradient(
      width / 2,
      height / 2,
      height * 0.12,
      width / 2,
      height / 2,
      height * 0.7,
    );
    vignette.addColorStop(0, theme.vignette[0]);
    vignette.addColorStop(1, theme.vignette[1]);
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  }
}

function getShareCrossCardLayout() {
  const ratio = 674 / 400;
  const gapX = 34;
  const gapY = 28;
  const cardWidth = 226;
  const cardHeight = cardWidth * ratio;
  const gridWidth = cardWidth * 3 + gapX * 2;
  const gridHeight = cardHeight * 3 + gapY * 2;
  const gridX = (shareSize.width - gridWidth) / 2;
  const gridY = (shareSize.height - gridHeight) / 2;
  const positions = {
    center: [1, 1],
    top: [1, 0],
    right: [2, 1],
    bottom: [1, 2],
    left: [0, 1],
  };

  return currentReading.map((card) => {
    const [column, row] = positions[card.positionId] ?? [1, 1];

    return {
      x: gridX + column * (cardWidth + gapX),
      y: gridY + row * (cardHeight + gapY),
      width: cardWidth,
      height: cardHeight,
    };
  });
}

function getShareGridCardLayout(count) {
  const ratio = 674 / 400;
  const gridWidth = 900;
  const gridHeight = 1090;
  const gridX = (shareSize.width - gridWidth) / 2;
  const gridY = (shareSize.height - gridHeight) / 2;
  const columns = count === 1 ? 1 : count <= 3 ? count : count <= 6 ? 3 : count <= 8 ? 4 : 5;
  const rows = Math.ceil(count / columns);
  const gapX = count <= 4 ? 36 : 26;
  const rowGap = count <= 3 ? 34 : 24;
  const widthByColumns = (gridWidth - gapX * (columns - 1)) / columns;
  const widthByRows = (gridHeight - rowGap * (rows - 1)) / rows / ratio;
  const preferredWidth = count === 1 ? 520 : count <= 3 ? 270 : 220;
  const cardWidth = Math.min(preferredWidth, widthByColumns, widthByRows);
  const cardHeight = cardWidth * ratio;
  const rowHeight = cardHeight;
  const gridContentWidth = columns * cardWidth + (columns - 1) * gapX;
  const gridContentHeight = rows * rowHeight + (rows - 1) * rowGap;
  const startY = gridY + (gridHeight - gridContentHeight) / 2;

  return currentReading.map((_, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    const cardsInRow = row === rows - 1 ? count - row * columns : columns;
    const rowWidth = cardsInRow * cardWidth + (cardsInRow - 1) * gapX;
    const rowStartX = gridX + (gridWidth - rowWidth) / 2;

    return {
      x: rowStartX + column * (cardWidth + gapX),
      y: startY + row * (rowHeight + rowGap),
      width: cardWidth,
      height: cardHeight,
    };
  });
}

function getShareCardLayout() {
  if (spreadSelect.value === "cross") {
    return getShareCrossCardLayout();
  }

  return getShareGridCardLayout(currentReading.length);
}

function drawShareCard(ctx, card, image, layout) {
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.38)";
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 18;
  drawRoundedRect(ctx, layout.x, layout.y, layout.width, layout.height, 14);
  ctx.fillStyle = "#efe3d1";
  ctx.fill();
  ctx.restore();

  ctx.save();
  drawRoundedRect(ctx, layout.x, layout.y, layout.width, layout.height, 14);
  ctx.clip();

  if (card.reversed) {
    ctx.translate(layout.x + layout.width / 2, layout.y + layout.height / 2);
    ctx.rotate(Math.PI);
    ctx.filter = cardColorFilter;
    drawImageCover(
      ctx,
      image,
      -layout.width / 2,
      -layout.height / 2,
      layout.width,
      layout.height,
      cardCropScale,
    );
  } else {
    ctx.filter = cardColorFilter;
    drawImageCover(ctx, image, layout.x, layout.y, layout.width, layout.height, cardCropScale);
  }
  ctx.filter = "none";

  ctx.restore();

  ctx.save();
  drawRoundedRect(ctx, layout.x, layout.y, layout.width, layout.height, 14);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgba(247, 241, 230, 0.86)";
  ctx.stroke();
  ctx.restore();
}

async function generateInstagramVisual() {
  if (!currentReading.length) {
    draw();
  }

  instagramButton.disabled = true;
  instagramButton.textContent = "生成中";

  try {
    const ctx = shareCanvas.getContext("2d");
    const width = shareSize.width;
    const height = shareSize.height;
    const boardTheme = getBoardTheme();
    const [textureImage, ...cardImages] = await Promise.all([
      loadCanvasImage(boardTheme.texture),
      ...currentReading.map((card) => loadCanvasImage(card.image)),
    ]);
    const layouts = getShareCardLayout();

    shareCanvas.width = width;
    shareCanvas.height = height;

    drawTextureBackground(ctx, textureImage, width, height, boardTheme);

    currentReading.forEach((card, index) => {
      drawShareCard(ctx, card, cardImages[index], layouts[index]);
    });

    if (typeof shareDialog.showModal === "function") {
      shareDialog.showModal();
    } else {
      shareDialog.setAttribute("open", "");
    }
  } catch (error) {
    window.alert(error.message);
  } finally {
    instagramButton.disabled = false;
    instagramButton.textContent = "Instagram";
  }
}

function closeShareDialog() {
  if (typeof shareDialog.close === "function") {
    shareDialog.close();
  } else {
    shareDialog.removeAttribute("open");
  }
}

function downloadShareImage() {
  shareCanvas.toBlob((blob) => {
    if (!blob) {
      window.alert("PNGを書き出せませんでした。");
      return;
    }

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `tarot-instagram-${Date.now()}.png`;
    anchor.click();
    URL.revokeObjectURL(url);
  }, "image/png");
}

function buildReading() {
  const spread = getSpread();
  const count = getCount();
  const deck = getActiveDeck();
  const debugCard = getDebugCard();
  const drawnCards = debugCard ? [debugCard] : shuffleDeck(deck).slice(0, count);

  currentReading = drawnCards.map((card, index) => ({
    ...card,
    position: getPositionName(spread, index),
    positionId: spread.ids?.[index] ?? "",
    reversed: reversedToggle.checked && Math.random() > 0.68,
    tilt: Math.round((Math.random() * 8 - 4) * 10) / 10,
  }));
}

function renderReading() {
  const spread = getSpread();
  spreadBoard.className = `spread-board ${spread.className}`;
  spreadBoard.innerHTML = "";

  currentReading.forEach((card, index) => {
    const slot = document.createElement("button");
    slot.className = "card-slot";
    slot.type = "button";
    slot.dataset.index = index.toString();

    if (card.positionId) {
      slot.dataset.positionId = card.positionId;
    }

    slot.style.setProperty("--tilt", `${card.tilt}deg`);
    slot.setAttribute(
      "aria-label",
      `${card.position}: ${card.name}${card.reversed ? " 逆位置" : ""}`,
    );

    const face = document.createElement("span");
    face.className = `card-face${card.reversed ? " is-reversed" : ""}`;

    const image = document.createElement("img");
    image.src = card.image;
    image.alt = "";
    image.loading = "eager";
    face.append(image);

    const label = document.createElement("span");
    label.className = "card-label";
    label.innerHTML = `
      <strong>${card.name}</strong>
      <span>${card.position}${card.reversed ? " / 逆位置" : ""}</span>
    `;

    slot.append(face, label);
    slot.addEventListener("click", () => selectCard(index));
    spreadBoard.append(slot);
  });
}

function selectCard(index) {
  const card = currentReading[index];

  if (!card) {
    return;
  }

  selectedCardIndex = index;
  detailPosition.textContent = `${card.position}${card.reversed ? " / 逆位置" : ""}`;
  detailName.textContent = card.name;
  detailMeaning.textContent = card.keywords.join(" ・ ");
  detailArt.className = `detail-art has-image${card.reversed ? " is-reversed" : ""}`;
  detailArt.style.backgroundImage = `url("${card.image}")`;
  detailPanel.dataset.selectedCard = card.id.toString();
}

function draw() {
  updateCountControl();
  updateDebugControl();
  selectedCardIndex = 0;
  buildReading();
  renderReading();
  selectCard(0);
  readingStamp.textContent = `${formatStamp()} 展開`;
}

spreadSelect.addEventListener("change", draw);
cardCount.addEventListener("input", () => {
  countValue.textContent = cardCount.value;
});
cardCount.addEventListener("change", draw);
backgroundSelect.addEventListener("change", applyBoardTheme);
reversedToggle.addEventListener("change", draw);
minorArcanaToggle.addEventListener("change", () => {
  populateDebugCardSelect();
  draw();
});
debugCardSelect.addEventListener("change", draw);
shuffleButton.addEventListener("click", draw);
drawButton.addEventListener("click", draw);
instagramButton.addEventListener("click", generateInstagramVisual);
shareCloseButton.addEventListener("click", closeShareDialog);
shareDownloadButton.addEventListener("click", downloadShareImage);
shareDialog.addEventListener("click", (event) => {
  if (event.target === shareDialog) {
    closeShareDialog();
  }
});

populateDebugCardSelect();
updateCountControl();
updateDebugControl();
applyBoardTheme();
draw();
