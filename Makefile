REPOSITORY = xqpractice/daocloud-demo
VERSION = `cat VERSION`

image:
	docker build -t $(REPOSITORY) .

git-release:
	git fetch --tags
	git tag -a release-v${VERSION} -m "Release version ${VERSION}"
	git push --tags

release: image
	docker tag $(REPOSITORY):latest $(REPOSITORY):$(VERSION)
	docker push $(REPOSITORY):latest
	docker push $(REPOSITORY):$(VERSION)

test:
	docker-compose build
	docker-compose run app yarn run test

start:
	docker-compose build
	docker-compose up
