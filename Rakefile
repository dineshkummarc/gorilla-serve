namespace :public do
  # Default scenario;
  # 
  #   - project
  #    ` serve
  #    ` radiant
  # 
  #   Inside project/serve you run `rake public:sync`, which will rsync project/serve/public to project/radiant/public.
  # 
  #   If the directory structure differs, you can specify a TARGET variable. For example;
  # 
  #   - rails projects dir
  #    ` philips-actie (serve dir)
  #    ` strijkapose (radiant dir)
  # 
  #   Inside philips-actie, run `rake public:sync TARGET=/../philips-actie`. So, target must be relative from the current dir.
  #   
  desc "Syncs public files to TARGET (default /../radiant)"
  task :sync do
    target = Dir.pwd + (ENV["TARGET"].nil? ? "/../radiant" : ENV["TARGET"])
    puts "Rsyncing public dir to " + target.to_s + "/public"
    system "rsync -r #{Dir.pwd.to_s + "/public/"} #{target.to_s + "/public"}"
    puts "It's still your job to review and commit the changes..."
  end
end
