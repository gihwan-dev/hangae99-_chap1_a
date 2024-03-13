function Worker(health) {
  this._health = health ?? 10;
}

function JuniorEngineer(health, intelligence) {
  this._super(health);
  this._intelligence = intelligence ?? 1;
  this._isBornGenius = intelligence > 10;
}

Worker.prototype.work = function () {
  this._health--;
};

Worker.prototype.getHealth = function () {
  return this._health;
};

JuniorEngineer.prototype = Object.create(Worker.prototype, {});

JuniorEngineer.prototype._super = function (health) {
  return Worker.call(this, health);
};

JuniorEngineer.prototype.getIntelligence = function () {
  return this._intelligence;
};

JuniorEngineer.prototype.work = function () {
  Worker.prototype.work.call(this);
  // this.__proto__.__proto__.work.call(this);
  this._intelligence++;
};

JuniorEngineer.prototype.isBornGenius = function () {
  return this._isBornGenius;
};

//- 여기에 코드를 작성하세요

/**
 * ## 문제 A - 추가문제
 *
 * <준비>
 * 1. 문제 A를 모두 푸신분만 풀어주세요.
 * 2. 아래의 코드의 주석을 해제하세요.
 * 3. npm run test:1a2 를 실행하면 성능(소요된 시간)이 콘솔에 나옵니다.
 *
 * <목표>
 * 코드를 개선하여 성능을 개선해보세요.
 *
 * <조건>
 * 1. 작성하신 코드부터 생성자함수까지 모든 코드를 수정하셔도 괜찮습니다.
 *
 * <제출물>
 * 1. 개선 이전 성능(콘솔화면 캡쳐)
 * 2. 개선 이후 성능(콘솔화면 캡쳐)
 * 3. 변경된 코드를 확인할 수 있는 링크 또는 캡쳐 이미지
 *
 * <코멘트>
 * - V8 엔진의 히든클래스 개념을 이해하고 이 개념을 응용하여 최적화 해보세요.
 * - ES 모듈시스템으로 바꾼뒤, 확장자를 .mjs로 변경한 뒤 실행해보세요. 최적화 결과가 같을까요?
 */
function main() {
  var startTime = performance.now();
  for (var i = 0; i < 10000000; i++) {
    new JuniorEngineer(10, Math.floor(Math.random() * 20)).isBornGenius();
  }
  var endTime = performance.now();

  console.log(endTime - startTime);
}

main();

module.exports = {
  Worker,
  JuniorEngineer,
};
