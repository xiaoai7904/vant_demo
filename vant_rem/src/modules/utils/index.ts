declare global {
    interface Window { _czc: any; }
}
/**
 * 工具集合
 */
export default class Utils {
  public static uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  public static downloadApp(downloadUrl: string): void {
    if (Utils.getUserAgent() === 'ios') {
      window._czc.push(['_trackEvent', 'ios下载', '下载', '下载', 0, 'download']);
      window.open(downloadUrl);
    } else {
      window._czc.push(['_trackEvent', 'Android下载', '下载', '下载', 0, 'download']);
      window.location.href = downloadUrl;
    }
  }
  public static getQueryString(): string | null {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }
  public static getUserAgent(): string {
    let u = window.navigator.userAgent;

    if (u.indexOf('MicroMessenger') > -1) {
      return 'weixin';
    }

    if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
      return 'android';
    }

    if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      return 'ios';
    }

    const isqq = u.match(/\sQQ/gi);

    if (isqq && isqq[0] == ' qq') {
      return 'qq';
    }

    return '';
  }
}
