#!/bin/bash
echo "deploy.sh execution..."
echo $TRAVIS_BRANCH
gitLastCommit=$(git show --summary --grep="Merge pull request")
if [[ -z "$gitLastCommit" ]]
then
	lastCommit=$(git log --format="%H" -n 1)
else
	echo "We got a Merge Request!"
	#take the last commit and take break every word into an array
	arr=($gitLastCommit)
	#the 5th element in the array is the commit ID we need. If git log changes, this breaks. :(
	lastCommit=${arr[4]}
fi
echo $lastCommit

filesChanged=$(git diff-tree --no-commit-id --name-only -r $lastCommit)
if [ ${#filesChanged[@]} -eq 0 ]; then
    echo "No files to update"
else
    for f in $filesChanged
	do
		#do not upload these files that aren't necessary to the site
		if [ "$f" != ".travis.yml" ] && [ "$f" != "deploy.sh" ] && [ "$f" != "test.js" ] && [ "$f" != "package.json" ]
		then
	 		echo "Uploading $f"
	 		if [ "$TRAVIS_BRANCH" == "master" ] 
	 		then
		 		curl --ftp-create-dirs -T $f -u admin46091820:wnu6ub4d11 ftp://95.110.228.140//opt/tomcatProduzione/webapps/ekaros/dantes/$f
		 	fi

		 	if [ "$TRAVIS_BRANCH" == "develop" ] 
		 	then
		 		curl --ftp-create-dirs -T $f -u admin46091820:wnu6ub4d11 ftp://95.110.228.140//opt/tomcatProduzione/webapps/ekaros/dantesTest/$f
		 	fi
		fi
	done
fi
echo "/deploy.sh execution"