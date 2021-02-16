<img src="frontend/chillcloud-frontend/src/assets/cloudversify-brands.png" align="right" width="154px" height="128px" />

# ChillCloud
ChillCLoud is a cloud computing system with integrated self-healing concepts. The product itself is a cloud platform on which users can host applications. Cloud System wasn't designed by us, [OpenStack](https://www.openstack.org/) system has been used instead. We intend to analyze possible errors in a cloud computing environment based on literature. Based on this, we will develop a process that collects data from the system, analyzes it and reacts accordingly in the event of an error. To check and test the operation of monitoring systems such as [Grafana](https://grafana.com/) and [Prometheus](https://prometheus.io/) on our virtual machines, a [Sock Shop](https://github.com/microservices-demo/microservices-demo) microservices application was deployed using [Kubernetes](https://kubernetes.io/).

# OpenStack setup
To provide customers private cloud with IaaS OpenStack was deployed using Kolla Ansible on bare metal servers. A complete overview of the cloud system is possible to get through Horizon Dashboard. We fist deployed single node Open Stack as a POC to explore learning curve of OpenStack. Then we redeployed the whole as multinode.

# VM's creation in OpenStack
After doing some research, by adjusting the images, flavors, key pairs and networks, we launched 4 instances running on Ubuntu 16.04 using Horizon. 

# Kubernetes deployment with Kubespray
Then, using [sample](https://github.com/kubernetes-sigs/kubespray/blob/master/inventory/sample/inventory.ini) of inventory file, we created inventory.ini and deployed cluster with ansible-playbook.

# Sock Shop installation
The next step was the deployment of the [Sock Shop](https://github.com/microservices-demo/microservices-demo) microservices application, which we carried out following the instructions on the site.

## List of used machines
1. wally190.cit.tu-berlin.de
2. wally191.cit.tu-berlin.de
3. wally192.cit.tu-berlin.de
4. wally193.cit.tu-berlin.de

# References & Quick guides
1. https://docs.openstack.org/kolla-ansible/latest/user/quickstart.html
2. https://docs.openstack.org/horizon/latest/  
3. https://docs.openstack.org/install-guide/overview.html
4. https://docs.openstack.org/install-guide/environment-networking-controller.html
5. https://creodias.eu/-/a-9-16
6. https://kubernetes.io/docs/setup/production-environment/tools/kubespray/
7. https://microservices-demo.github.io/deployment/kubernetes-start.html
