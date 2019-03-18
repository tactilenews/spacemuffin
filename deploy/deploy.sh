# Required to authenticate the target host
echo "${TARGET_PUB_KEY}" | base64 --decode >> $HOME/.ssh/known_hosts

# Decode private SSH key
echo "${TARGET_DEPLOY_KEY}" | base64 --decode > $HOME/.ssh/deploy_rsa

# Set permissions for the SSH key, so that no other users etc. can
# read/write it
chmod 600 $HOME/.ssh/deploy_rsa

# Stop Nuxt.js service, the web app will be unavailable for the
# duration of the deployment.
ssh \
  -i $HOME/.ssh/deploy_rsa \
  $TARGET_USER@$TARGET_HOST \
  'supervisorctl stop spacemuffin-daemon'

# Upload changes to Uberspace using `rsync`
rsync \
  -hacz --delete --info=name1,stats2 \
  -e "ssh -i $HOME/.ssh/deploy_rsa" \
  ./{.nuxt,api,dist,node_modules,static,nuxt.config.js,package.json} \
  $TARGET_USER@$TARGET_HOST:/var/www/virtual/$TARGET_USER/app

# Start the Nuxt.js service so that the web app is available again
ssh \
  -i $HOME/.ssh/deploy_rsa \
  $TARGET_USER@$TARGET_HOST \
  'supervisorctl start spacemuffin-daemon'
