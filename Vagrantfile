Vagrant.configure("2") do |config|
	config.vm.box = "ubuntu/bionic64"
	config.vm.provision :shell, path: "bootstrap.sh"
	config.vm.network :forwarded_port, guest: 3000, host: 3000
	config.vm.network :forwarded_port, guest: 27017, host: 27017
	config.vm.provider "virtualbox" do |vb|
    vb.memory = "6000"
    vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant", "1"]
  end
end
