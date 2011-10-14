namespace :public do
  desc "Syncs public files to TARGET (default /../radiant)"
  task :sync do
    target = Dir.pwd + (ENV["TARGET"].nil? ? "/../radiant" : ENV["TARGET"])
    puts "Rsyncing public dir to " + target.to_s + "/public"
    system "rsync -r #{Dir.pwd.to_s + "/public/"} #{target.to_s + "/public"}"
    puts "It's still your job to review and commit the changes..."
  end
end
