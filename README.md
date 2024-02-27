📌 이 프로젝트는 [npm workspace](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true)를 통한 [monorepo](https://en.wikipedia.org/wiki/Monorepo) 구조로 구성되어 있습니다

<br>

# 🧪 Prerequisite

1. Node(v18이상)를 설치합니다 <br>([nvm](https://github.com/nvm-sh/nvm)으로 설치할 것을 권장합니다)

<br>

# ⚡ Quick Start (DEV)
1. 레포지토리 Clone
```
git clone https://github.com/hongjyoun/member-front-react.git
```
2. 패키지들을 초기화한 후 설치합니다
```shell
npm run init
```

3. 아래의 명령어를 통해서 애플리케이션을 실행합니다
```shell
npm run admin:start
npm run local:start
```

<br>

# 💻 Commands

## 설치

```shell
# 패키지 설치 또는 삭제 (root)
npm i {package name}
npm uninstall {package name}

# 패키지 설치 또는 삭제 (workspace)
npm i {package name} -w {monorepo package name} # npm i lodash -w @member/admin
npm uninstall {package name} -w {monorepo package name}

# ⭐ packages.json을 기반으로 패키지 설치
npm install
```

## 실행 및 빌드

```shell
npm run admin:start
npm run admin:build

npm run local:start
npm run local:build
```

실행하고 싶은 명령어가 있다면, 아래와 같은 방식으로 실행할 수 있습니다.
```shell
npm run {script} -w {workspace name} // ex. npm run start -w @member/admin
```

<br>
