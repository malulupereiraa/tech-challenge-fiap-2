# # Criar o cluster
# gcloud container clusters create fiap-tech-challenge \
#   --num-nodes 1 \
#   --issue-client-certificate \
#   --zone 'us-east1-b'

export PROJECT_ID='fiap-fe-tech-challenge-fase-2'
export DOCKER_IMAGE="gcr.io/$PROJECT_ID/tech-challenge-fiap-2-shell:v1"
export DEPLOYMENT='fiap-tech-challenge-2-shell'

# Publish Docker Image
docker build -t tech-challenge-fiap-2-shell ./shell

docker tag tech-challenge-fiap-2-shell $DOCKER_IMAGE

gcloud auth configure-docker

docker push $DOCKER_IMAGE

# Setar o cluster a ser usado pelo `kubectl`
gcloud container clusters get-credentials fiap-tech-challenge \
  --region us-east1-b \
  --project $PROJECT_ID

# Implantar
kubectl create deployment $DEPLOYMENT --image=$DOCKER_IMAGE

# Publicar
kubectl expose deployment $DEPLOYMENT \
  --type=LoadBalancer \
  --port 80 \
  --target-port 3000

# Esperar pela finalização do deployment
kubectl rollout status deployment $DEPLOYMENT

# Pegar o IP do `service`
ip=$(kubectl get service $DEPLOYMENT --output jsonpath='{.status.loadBalancer.ingress[0].ip}')

# criar dns record
gcloud dns record-sets create 'challengecoders.com.' \
  --project=$PROJECT_ID \
  --zone="challenge-coders" \
  --type="A" \
  --ttl="300" \
  --rrdatas=${ip}

# Apagar as coisas

# # apagar o dns record
# gcloud dns record-sets delete 'challengecoders.com.' \
#   --project=$PROJECT_ID \
#   --zone="challenge-coders" \
#   --type="A"

# kubectl delete service $DEPLOYMENT
# kubectl delete deployment $DEPLOYMENT
# gcloud container clusters delete fiap-tech-challenge
# gcloud container images delete $DOCKER_IMAGE
