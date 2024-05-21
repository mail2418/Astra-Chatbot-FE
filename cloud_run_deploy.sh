# Navigate to the script's directory
cd "$(dirname "$0")"

echo $(dirname "$0")
# Load environment variables from .env
export $(grep -v '^#' .env | xargs)

# Prepare environment variables for the gcloud command
ENV_VARS=$(grep -v '^#' .env | grep -v '^GOOGLE_APPLICATION_CREDENTIALS=' | xargs | sed 's/ /,/g')

echo $ENV_VARS

# Build the Docker image
gcloud builds submit \
  --region=asia-southeast2 \
  --tag docker.pkg.dev/$GCP_PROJECT_ID/$GCP_CLOUD_BUILD_IMAGE_TAG \

# Deploy to Cloud Run
gcloud run deploy $GCP_CLOUD_RUN_DEPLOY_ID \
  --image docker.pkg.dev/$GCP_PROJECT_ID/$GCP_CLOUD_BUILD_IMAGE_TAG \
  --region $GCP_REGION \
  --service-account $GCP_SERVICE_ACCOUNT_EMAIL \
  --allow-unauthenticated \
  --set-env-vars $ENV_VARS \
  --service-account $GOOGLE_APPLICATION_CREDENTIALS