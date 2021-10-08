const os = require('os');

setInterval(() => {

    const { arch, platform, totalmem, freemem } = os;
    const totalRam = totalmem() / 1024 / 1024;
    const FreeRam = freemem() / 1024 / 1024;
    const usage = (FreeRam / totalRam) * 100;

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRam: `${parseInt(totalRam)} MB`,
        FreeRam: `${parseInt(FreeRam)} MB Livre`,
        Stats: `${usage.toFixed(2)} %`
    }
    console.clear();
    console.table(stats);

    exports.stats = stats;

}, 1000)