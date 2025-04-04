const avoidance = document.getElementById("avoidanceSelect").value;
const physique = document.getElementById("physiqueSelect").value;
const color = document.getElementById("colorSelect").value;
const head = document.getElementById("headSelect").value;
const antenna = document.getElementById("antennaSelect").value;
const feature = document.getElementById("featureSelect").value;

const params = new URLSearchParams({
    avoidance: avoidance,
    physique: physique,
    color: color,
    head: head,
    antenna: antenna,
    feature: feature,
    qrData: qrDataURL // QRコードのデータURL
});

document.getElementById("goToBoard").href = "https://example.com/board?" + params.toString();

function resetSelectBoxes() {
    document.getElementById("avoidanceSelect").selectedIndex = 0;
    document.getElementById("physiqueSelect").selectedIndex = 0;
    document.getElementById("colorSelect").selectedIndex = 0;
    document.getElementById("headSelect").selectedIndex = 0;
    document.getElementById("antennaSelect").selectedIndex = 0;
    document.getElementById("featureSelect").selectedIndex = 0;
}

function generateQRCode() {
    // QRコード生成処理
    // ...
    resetSelectBoxes(); // セレクトボックスをリセット
}
